/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/06/06/shu-ju-jie-gou-kmp-suan-fa-c-yu-yan-shi-xian/index.html","877aa952102615a97e60e27395d6c87a"],["/2022/06/06/wen-ti-a-string-ji-suan-zi-chuan-chu-xian-ci-shu/index.html","8ec18a309d48baafc57c8b7bec279a54"],["/2022/06/08/acm-dao-li-yang-hui-san-jiao-xing/index.html","a9eb48d2c3d8493e4d68d0d47aaebf2f"],["/2022/06/08/nat-di-zhi-zhuan-huan/index.html","d4b4285b45104e0078ffa18ae0315409"],["/2022/06/10/guang-du-you-xian-sou-suo-suan-fa/index.html","c5d365344017089c8853fe50e44ceb36"],["/2022/06/14/fu-luo-yi-de-suan-fa/index.html","997340cfe7815f4aeaa77d93ec00987d"],["/2022/06/14/shu-ju-jie-gou-pai-xu-suan-fa-zong-jie/index.html","3e3781ead68ed081984afbc4cb903280"],["/2023/01/10/fu-shi/index.html","7ecaa48de7e39e6e897e92898e17af8c"],["/2023/10/10/ji-yu-pytorch-de-mao-shu-da-zhan/index.html","e0ecbd1e6f12a806a8b62288cee14916"],["/2023/10/10/pytorch-xue-xi-bi-ji/index.html","47632498d442387df4c873b4b85d2957"],["/2023/10/10/real-time-radiance-fields-for-single-image-portrait-view-synthesis/index.html","09c9213265dd2bb62524ab1b9cc25434"],["/2023/10/10/zhang-liang/index.html","1e37b33c3c444fe6f54c946979b6feed"],["/2023/10/15/sherf-generalizable-human-nerf-from-a-single-image/index.html","2d68eddbcdf718c4711f0b8177bd8d0b"],["/404.html","6654321bc8d8d8410da04ecd962ca7a6"],["/404/index.html","25835493e5d72f85728962f3fc71c0ea"],["/AV/index.html","8f1aa61a04e0a345857ad2e96d9aa83f"],["/about/index-1.html","3c2808a93f314d729852ad5d37c1e501"],["/about/index.html","617eac1c729bba27279ac0bc3e9e9424"],["/archives/2022/06/index.html","73cdce10ccb1d97bee69627fa1d5153e"],["/archives/2022/index.html","05aa3bdf981bdc8f7bcc503e72e7a7ba"],["/archives/2023/01/index.html","e1abb8ddc5631dd7e6cd9360e08bd482"],["/archives/2023/10/index.html","59503b841611fb349d1f638ed4debfe7"],["/archives/2023/index.html","eade0e1d0c591bad2c93a8fba7bd268d"],["/archives/index.html","607a17d80d29a78929dbb4e5dd955f3c"],["/archives/page/2/index.html","7674d583737f9251bfe2c954834f587c"],["/bangumis/index.html","c7ca95385abca379e2bf135463541605"],["/book/index.html","cee8b634c4b7b458c9f3534971f6e385"],["/categories/ACM/index.html","c2efbf69281a35fbc527ba2e0a3362eb"],["/categories/index.html","b538d6d46ab05299ccff0d763366e3d2"],["/categories/数据结构/index.html","6a5f839335c2fb50533b752efa28e10e"],["/comment/index.html","60ba7718e15bffef17a25380569b3a56"],["/contact/index.html","d4111dafe91eb4d033957e6db3028a68"],["/css/background.css","290bca9ce5d91092ea245158cecf80c9"],["/css/custom.css","1d9fc9d0e8a77e872f642c5d3c825ce4"],["/css/index.css","da40ed9dbff813727cb50b6870710827"],["/css/prism-line-numbers.css","0810c0e4aa6528786cf1253de32ea115"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c09ed138ad458ef515f4772676a096e7"],["/galleries/index.html","6e3f8b38abbb799df4aefab9736acedf"],["/galleries/scenery/index.html","b8509f89f9b6a1707d7c9d8b1f938b78"],["/galleries/technology/index.html","3753687bd79ec880d1a55ebba347c0e4"],["/galleries/wallpaper/index.html","bc60c9e29e936e3b9354782c68b34ac9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hy.jpg","d442b82b6f8c98c96dbce97564acf147"],["/img/index.jpg","bf6786e0157e3b1650564f76a19392d9"],["/img/zhifeiji.gif","45dae578a81236a21681087679152969"],["/index.html","a3f5cbc3e259bd557bbea8d1a7f97b8f"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/runtime.js","d4bdfc5b05437c2dc9d93ccad422c14a"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1dc67dcd077f5168b44b4a4eb2449127"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/avatars/hwsun.jpg","086532254539e47cc87a34a1f2e1d32d"],["/medias/avatars/hy.jpg","d442b82b6f8c98c96dbce97564acf147"],["/medias/avatars/y.jpg","bc2a4e942eb2e603b5a161d1517ccfef"],["/medias/banner/0.png","ea5c453b4e8d43c4555daa029c5df218"],["/medias/banner/1.png","9b04d151e3a47d7899bf3394018a47ee"],["/medias/banner/2.png","1e3228cab03775caf30393cfe54bf869"],["/medias/banner/3.png","2fd1d39a3a8ed087ab306c5c79a8adcd"],["/medias/banner/4.png","3bf715a16060580bc3e681aa404d6fae"],["/medias/banner/5.png","e599f083306bde8284be33f6f74ab152"],["/medias/banner/6.png","0af196a539a295c7ad4750b6bf832014"],["/medias/banner/7.png","fc165783fbb21c944bb844294ad1da9c"],["/medias/banner/8.png","8f8acfacdd2570d8185d29e0dbd3a079"],["/medias/banner/9.png","51982fe489bd7c33a3f3154cfab8a470"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","8898080c43ca416000e8ce26f05a06f8"],["/medias/featureimages/5.jpg","3e268def7847628c76ddb989e271ba4c"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/images/loading.gif","e8e14795cbdb002a023c316c6698092c"],["/medias/logo.png","21fe2017c56cf0bbfd0a99d1459db875"],["/medias/reward/alipay.jpg","c29bf567da75f3e7f527429f5c486d1f"],["/medias/reward/wechat.jpg","3430326c992788ad247dfa5e8e12c11d"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/reward/zan.png","cac86bf3d6c3922556e2d6e7e72166be"],["/movies/index.html","c9d78aa0aad89b09bb83b44314553aa8"],["/music/index.html","cd82e89afaf4331990312decc80c1f67"],["/page/2/index.html","40e63dd81f82dea585a43510dd6004d2"],["/sw-register.js","9216aa384236aa4ade8d733de5e29337"],["/tags/KMP/index.html","7a9c8510e4c44db4a4f43c964a14ccc8"],["/tags/index.html","1203e9b8b86bd18739ec2369d30aff13"],["/tags/string/index.html","7b55596099ddcd368979986510639dec"],["/video/video.html","1ccf27c756c3925c7ae22b6d6ab2294c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
