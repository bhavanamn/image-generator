/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect,useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  InstapaperIcon,
  InstapaperShareButton
} from "react-share";

const API_URL = 'https://api.unsplash.com/photos';


const ShareImage = () => {
  const { ImageID } = useParams();
  const [imageData, setImageData] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const [isCopied, setIsCopied] = useState(false);

  const copyText = async (link) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
    }
    setTimeout(() => setIsCopied(false), 1000 * 10);
  };

  useEffect(() => {
    fetch(
      `${API_URL}/${ImageID}?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    )
      .then((res) => res.json())
      .then((data) => setImageData(data))
      .catch((err) => console.log(err));
  }, []);

  if (imageData) {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-900">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-center font-bold leading-6 text-gray-900 dark:text-white"
                  >
                    <div>Share Image</div>
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="absolute right-0 top-0 my-4 mx-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="text-3xl text-white"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                  </button>
                  <div className="mt-2 flex items-center flex-wrap">
                    <button
                      className="w-12 h-12 rounded-full bg-white p-4 mx-2 cursor-pointer flex items-center justify-center outline-none"
                      onClick={() => copyText(imageData?.urls?.small)}
                    >
                      {!isCopied ? (
                         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" title="Copy Link"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" title="Copied"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                      )}
                    </button>
                    <FacebookShareButton url={imageData?.urls?.small}>
                      <FacebookIcon className="rounded-full p-2" />
                    </FacebookShareButton>
                    <TwitterShareButton url={imageData?.urls?.small}>
                      <TwitterIcon className="rounded-full p-2" />
                    </TwitterShareButton>
                    <WhatsappShareButton url={imageData?.urls?.small}>
                      <WhatsappIcon className="rounded-full p-2" />
                    </WhatsappShareButton>
                    <LinkedinShareButton url={imageData?.urls?.small}>
                      <LinkedinIcon className="rounded-full p-2" />
                    </LinkedinShareButton>
                    <TelegramShareButton url={imageData?.urls?.small}>
                      <TelegramIcon className="rounded-full p-2" />
                    </TelegramShareButton>
                    <InstapaperShareButton url={imageData?.urls?.small}>
                      <InstapaperIcon className="rounded-full p-2" />
                    </InstapaperShareButton>
                    <EmailShareButton url={imageData?.urls?.small}>
                      <EmailIcon className="rounded-full p-2" />
                    </EmailShareButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
};

export default ShareImage;
