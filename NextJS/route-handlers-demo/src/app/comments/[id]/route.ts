import { comments } from "../data";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const commentId = params.id;

  const commentToUpdate = comments.find((comment) => {
    if (comment.id === Number(params.id)) {
      return comment;
    }
  });

  if (!commentToUpdate) {
    const errorMsg = {
      error: "Comment not found",
    };
    return new Response(JSON.stringify(errorMsg), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }

  const body = await req.json();
  commentToUpdate.text = body.text;
  return new Response(JSON.stringify(commentToUpdate), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const commentId = parseInt(params.id);

  const indexOfCommentToDelete = comments.findIndex((comment) => {
    if (comment.id === commentId) return comment.id;
  });

  if (indexOfCommentToDelete === -1) {
    const errorMsg = {
      error: "Comment not found",
    };
    return new Response(JSON.stringify(errorMsg), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }

  comments.splice(indexOfCommentToDelete, 1);
  return new Response(
    JSON.stringify({ message: "Comment delete successfully" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    }
  );
}
