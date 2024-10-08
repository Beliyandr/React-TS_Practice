import React from "react";
import { Post } from "../types/Post";
import classNames from "classnames";

type Props = {
  posts: Post[];
  selectedPostId?: number;
  onDelete?: (postId: number) => void;
  onSelect?: (post: Post) => void;
};

export const PostList: React.FC<Props> = React.memo(
  ({ posts, selectedPostId, onDelete = () => {}, onSelect = () => {} }) => {
    console.log("Rendering Postlist");
    return (
      <table className="table is-striped is-narrow box">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th>User</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className={classNames({
                "has-background-info": selectedPostId === post.id,
              })}
            >
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.user?.username}</td>
              <td>
                <button
                  className="icon button is-inverted is-info"
                  onClick={() => onSelect(post)}
                >
                  <i className="fas fa-pen"></i>
                </button>
              </td>
              <td>
                <button
                  className="icon button is-inverted is-danger"
                  onClick={() => onDelete(post.id)}
                >
                  <i className="fas fa-xmark"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
);
