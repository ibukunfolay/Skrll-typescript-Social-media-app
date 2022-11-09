import React, { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import { MdFavorite } from 'react-icons/md';

interface IProps {
  likes: any[];
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((like) => like._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="gap-6 mt-4 flex flex-col justify-center items-center cursor-pointer">
      {alreadyLiked ? (
        <div
          className="bg-primary rounded-full p-2 md:p-4 text-secondary"
          onClick={handleDislike}
        >
          <MdFavorite className="text-lg md:text-2xl" />
        </div>
      ) : (
        <div
          className="bg-primary rounded-full p-2 md:p-4"
          onClick={handleLike}
        >
          <MdFavorite className="text-lg md:text-2xl" />
        </div>
      )}
      <p className="text-md font-semibold"> {likes?.length || 0} </p>
    </div>
  );
};

export default LikeButton;
