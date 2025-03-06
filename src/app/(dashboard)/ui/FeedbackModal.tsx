"use client";
import { X, Star } from "lucide-react";
import { useState } from "react";

// Define the type for the modal props
interface FeedbackModalProps {
    isOpen: boolean; // This must be a boolean
    onClose: () => void; // This must be a function
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
    const [feedbackData, setFeedbackData] = useState({ comment: "", rating: 0 });

    // Prevent page reload on form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Feedback submitted:", feedbackData);
        onClose(); // Close modal after submission
    };

    // Prevent modal from closing when clicking inside it
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    if (!isOpen) return null; // Don't render modal if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30" onClick={onClose}>
            <div 
                className="relative bg-white rounded-lg p-6 w-[600px] max-h-[90vh] overflow-y-auto"
                onClick={handleModalClick} // Prevents modal from closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <h3 className="text-2xl font-semibold mb-4">Event Feedback</h3>

                {/* Feedback Input */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">
                            Feedback<span className="text-red-600 text-lg">*</span>
                        </label>
                        <textarea
                            value={feedbackData.comment}
                            onChange={(e) =>
                                setFeedbackData((prev) => ({
                                    ...prev,
                                    comment: e.target.value,
                                }))
                            }
                            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
                            placeholder="Enter feedback on the event"
                            required
                        />
                    </div>

                    {/* Rating Section */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">
                            Rate your experience<span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() =>
                                        setFeedbackData((prev) => ({
                                            ...prev,
                                            rating: star,
                                        }))
                                    }
                                    className="focus:outline-none"
                                >
                                    <Star
                                        className={`w-6 h-6 ${
                                            star <= feedbackData.rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm bg-blue-800 text-white rounded-full hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;
