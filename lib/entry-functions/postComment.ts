import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type PostCommentArguments = {
  content: string;
};

export const postComment = (args: PostCommentArguments): InputTransactionData => {
  const { content } = args;
  return {
    data: {
      function: `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}::message_board::post_message`,
      functionArguments: [content],
    },
  };
};