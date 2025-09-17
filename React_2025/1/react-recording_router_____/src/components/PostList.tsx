import React from "react";
import { Post } from "../types/Post";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

type Props = {
  posts: Post[];
  selectedPostId?: number;
  onDelete?: (id: number) => void;
  onSelect?: (post: Post) => void;
};

export const PostList: React.FC<Props> = React.memo(
  ({ posts, selectedPostId, onDelete = () => {}, onSelect = () => {} }) => {
    return (
      <table className="table is-striped is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => {
            return (
              <tr
                key={post.id}
                className={classNames({
                  "has-background-info": selectedPostId === post.id,
                })}
              >
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link
                    to={`${post.id}`}
                    className="icon button is-inverted is-info"
                  >
                    <i className="fas fa-pen"></i>
                  </Link>
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
            );
          })}
        </tbody>
      </table>
    );
  }
);
