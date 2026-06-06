function createLimiter() {
  return {
    async limit() {
      return {
        success: true,
      };
    },
  };
}

export const forgotPasswordLimiter = createLimiter();
export const otpLimiter = createLimiter();
export const otpVerifyLimiter = createLimiter();
export const loginLimiter = createLimiter();
