const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8888/techtriggers-backend/api';
const CONTACT_ENDPOINT = import.meta.env.VITE_API_CONTACT_ENDPOINT || '/contact.php';

export async function submitContact(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}${CONTACT_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    // The server explains validation problems in its JSON reply, so pass that on
    // instead of throwing it away.
    const body = await response.json().catch(() => null);
    if (body) return body;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return { success: false, message: 'Unexpected reply from the server.' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error.message || 'Failed to submit contact form. Please try again later.'
    };
  }
}
