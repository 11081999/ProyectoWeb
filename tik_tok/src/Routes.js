const DOMAIN = "http://localhost:8000/";

const CREATE_USER_ENDPOINT = DOMAIN + "user/create";
const AUTHENTICATE_USER_ENDPOINT = DOMAIN + "user/authenticate";
const GET_VIDEOS_ENDPOINT = DOMAIN + "video/all";
const GET_VIDEO_ENDPOINT = DOMAIN + "video/";
const IS_LIKED_ENDPOINT = DOMAIN + "video/likes/";
const LIKE_VIDEO_ENDPOINT = DOMAIN + "video/like/";
const COMMENT_VIDEO_ENDPOINT = DOMAIN + "video/comment";
const SEARCH_PROFILES_ENDPOINT = DOMAIN + "profile/search/";
const GET_PROFILE_ENDPOINT = DOMAIN + "profile/";

export {DOMAIN, CREATE_USER_ENDPOINT, AUTHENTICATE_USER_ENDPOINT, GET_VIDEOS_ENDPOINT, GET_VIDEO_ENDPOINT, IS_LIKED_ENDPOINT, LIKE_VIDEO_ENDPOINT, COMMENT_VIDEO_ENDPOINT, SEARCH_PROFILES_ENDPOINT, GET_PROFILE_ENDPOINT};