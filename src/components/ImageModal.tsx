import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface ImageModalProps {
  selectedImage: string;
  totalImages: number;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const ImageModal = ({
  selectedImage,
  totalImages,
  currentIndex,
  onClose,
  onNavigate,
}: ImageModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}>
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <div
          className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-white p-2 shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}>
          <FaTimes className="h-6 w-6 text-gray-800" />
        </div>

        {totalImages > 1 && (
          <>
            <div
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("prev");
              }}>
              <FaChevronLeft className="h-6 w-6 text-gray-800" />
            </div>
            <div
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("next");
              }}>
              <FaChevronRight className="h-6 w-6 text-gray-800" />
            </div>
          </>
        )}

        <motion.img
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          src={selectedImage}
          className="max-h-[80vh] rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        <div className="mt-4 flex justify-center">
          <p className="rounded-full bg-white bg-opacity-70 px-4 py-2 text-sm font-medium text-gray-800">
            {currentIndex + 1} / {totalImages}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
