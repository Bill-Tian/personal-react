import http from "@/utils/request";
import config from "../config";
const baseUrl = config.domain + config.articlePath;

// 获取文章
export const getArticleAllrApi = () => {
    return http.get({ url: baseUrl + '/' });
};
