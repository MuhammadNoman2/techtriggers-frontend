const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8888/techtriggers-backend/api';
const QUOTE_ENDPOINT = import.meta.env.VITE_API_QUOTE_ENDPOINT || '/quotation.php';

export async function submitQuote(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}${QUOTE_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting quote request:', error);
    return {
      success: false,
      message: error.message || 'Failed to submit quote request. Please try again later.'
    };
  }
}
