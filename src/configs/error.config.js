module.exports = {
  message: {
    400: {
      success: false,
      message: "Bad request!"
    },
    401: {
        success: false,
        message: "Unauthorized!"
    },
    404: {
        success: false,
        message: "URL tidak ditemukan!"
    },
    500: {
        success: false,
        message: "Terjadi kesalahan internal di server!"
    }
  }
}