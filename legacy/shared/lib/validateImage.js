export function validateImage(
  file
) {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
  ];

  if (
    !allowedTypes.includes(
      file.type
    )
  ) {
    throw new Error(
      'Invalid image type'
    );
  }

  const maxSize =
    5 * 1024 * 1024;

  if (file.size > maxSize) {
    throw new Error(
      'File too large'
    );
  }
}