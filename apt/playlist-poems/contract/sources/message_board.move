module message_board_addr::message_board {
    use std::string::String;
    use std::signer;
    use aptos_framework::event;
    use aptos_framework::timestamp;

    use aptos_framework::object::{Self, ExtendRef};

    struct Message has key {
        string_content: String,
    }

    // Event emitted when a new message is posted
    #[event]
    struct MessagePostedEvent has drop, store {
        author: address,
        content: String,
        timestamp: u64,
    }

    const BOARD_OBJECT_SEED: vector<u8> = b"message_board";

    struct BoardObjectController has key {
        extend_ref: ExtendRef,
    }

    // This function is only called once when the module is published for the first time.
    // init_module is optional, you can also have an entry function as the initializer.
    fun init_module(sender: &signer) {
        let constructor_ref = &object::create_named_object(sender, BOARD_OBJECT_SEED);
        move_to(&object::generate_signer(constructor_ref), BoardObjectController {
            extend_ref: object::generate_extend_ref(constructor_ref),
        });
    }

    // ======================== Write functions ========================

    public entry fun post_message(
        sender: &signer,
        new_string_content: String,
    ) acquires Message, BoardObjectController {
        if (!exist_message()) {
            let board_obj_signer = get_board_obj_signer();
            move_to(&board_obj_signer, Message {
                string_content: new_string_content,
            });
        };
        let message = borrow_global_mut<Message>(get_board_obj_address());
        message.string_content = new_string_content;

        // Emit event with message details
        event::emit(MessagePostedEvent {
            author: signer::address_of(sender),
            content: new_string_content,
            timestamp: timestamp::now_microseconds(),
        });
    }

    // ======================== Read Functions ========================

    #[view]
    public fun exist_message(): bool {
        exists<Message>(get_board_obj_address())
    }

    #[view]
    public fun get_message_content(): (String) acquires Message {
        let message = borrow_global<Message>(get_board_obj_address());
        message.string_content
    }

    // ======================== Helper functions ========================

    fun get_board_obj_address(): address {
        object::create_object_address(&@message_board_addr, BOARD_OBJECT_SEED)
    }

    fun get_board_obj_signer(): signer acquires BoardObjectController {
        object::generate_signer_for_extending(&borrow_global<BoardObjectController>(get_board_obj_address()).extend_ref)
    }

    // ======================== Unit Tests ========================

    #[test_only]
    public fun init_module_for_test(sender: &signer) {
        init_module(sender);
    }
}
