export function handleServerError(error) {
  return {
    success: false,
    error: error instanceof Error ? error.message : "Unknown server error",
  };
}
