import { AiFillBackward, AiFillForward } from "react-icons/ai";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`bg-gray-800 ${
          currentPage === 1 ? "" : "hover:bg-gray-900"
        } px-2 py-1 rounded-lg`}
      >
        <AiFillBackward />
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`bg-gray-800 ${
          currentPage === totalPages ? "" : "hover:bg-gray-900"
        } px-2 py-1 rounded-lg`}
      >
        <AiFillForward />
      </button>
    </div>
  );
}
