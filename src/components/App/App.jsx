import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import getGallery from "../../backEndAPI"
import css from "./App.module.css"
import Modal from 'react-modal'
import { useState } from "react"
import { useEffect } from "react"
import { Vortex } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast'
Modal.setAppElement(document.getElementById("root"))

export default function App() {
  const [searchParams, setSearchParams] = useState("")
  const [galleryPhotos, setGalleryPhotos] = useState([])
  const [isError, setIsError] = useState(false)
  const [loader, setLoader] = useState(false)
  const [page, setPage] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalImg, setModalImg] = useState("")
  const [modalAlt, setModalAlt] = useState("")
  useEffect(() => {
    async function searchPhotos() {
      if (searchParams === "") {
        return;
      }
      try {
        setIsError(false)
        setLoader(true)
        const gallery = await getGallery(searchParams, page)
        setGalleryPhotos((current) => {
          return [ ...current, ...gallery.data.results]
        })
      } catch (error) {
        setIsError(true)
      } finally {
        setLoader(false)
      }
    }
    searchPhotos()
  }, [searchParams, page])
  const handleSubmit = (values) => {
    if (values.search !== "") {
      setGalleryPhotos([])
      setPage(1)
      setSearchParams(values.search)
    } else {
      notify()
    }
  }
  const handleClick = () => {
    setPage(page + 1)
  }
  const notify = () => toast.error('Enter text!')
  const handleImgClick = (event) => {
    setModalImg(event.target.getAttribute('data-modal'))
    setModalAlt(event.target.getAttribute('alt'))
    setModalIsOpen(true)
  }
  const handleClose = () => {
    setModalIsOpen(false)
  }
  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar handleSubmit={handleSubmit} />
      {galleryPhotos.length !== 0 && <ImageGallery galleryPhotos={galleryPhotos} handleImgClick={handleImgClick} />}
      {galleryPhotos.length !== 0 && <LoadMoreBtn handleClick={handleClick} />}
      {isError && <ErrorMessage />}
      <ImageModal isOpen={modalIsOpen} onClose={handleClose}>
        <img src={modalImg} alt={modalAlt} />
      </ImageModal>
      <div className={css.loader}>
        <Vortex
          visible={loader}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    </div>
  )
}


