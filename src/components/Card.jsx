/* eslint-disable react/prop-types */
import {useContext, useState} from "react";
import Rating from "../components/Rating";
import { getImgUrl } from "../utility/movie-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import {MovieContext} from "../context/index.js";
import {Bounce, toast} from "react-toastify";

export default function Card({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { cover, genre, price, rating, title } = movie;

  const {state, dispatch} = useContext(MovieContext)

  function handleAddToCard(e,movie) {
    e.stopPropagation()
    const found  = state.cartData.find(item => item.id === movie.id);
    if(found){
      error()
    }else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...movie
        }
      })
      success()
    }
  }

  const success = () => toast.success('item added', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const error = () => toast.error('item already added', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={movie} setShowModal={setShowModal} handleAddToCard = {handleAddToCard}/>
      )}
      <figure
        onClick={() => setShowModal(!showModal)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img className="w-full object-cover" src={getImgUrl(cover)} alt="" />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            {<Rating value={rating} />}
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span onClick={(e) => handleAddToCard(e,movie)}>
              ${price} | Add to Cart
            </span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
