/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Web
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the WebSearchClient.
 */
export interface Web {


    /**
     * @summary The Web Search API lets you send a search query to Bing and get
     * back search results that include links to webpages, images, and more.
     *
     * @param {string} query The user's search query term. The term may not be
     * empty. The term may contain Bing Advanced Operators. For example, to limit
     * results to a specific domain, use the site: operator.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.acceptLanguage] A comma-delimited list of one or
     * more languages to use for user interface strings. The list is in decreasing
     * order of preference. For additional information, including expected format,
     * see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This
     * header and the setLang query parameter are mutually exclusive; do not
     * specify both. If you set this header, you must also specify the cc query
     * parameter. Bing will use the first supported language it finds from the
     * list, and combine that language with the cc parameter value to determine the
     * market to return results for. If the list does not include a supported
     * language, Bing will find the closest language and market that supports the
     * request, and may use an aggregated or default market for the results instead
     * of a specified one. You should use this header and the cc query parameter
     * only if you specify multiple languages; otherwise, you should use the mkt
     * and setLang query parameters. A user interface string is a string that's
     * used as a label in a user interface. There are very few user interface
     * strings in the JSON response objects. Any links in the response objects to
     * Bing.com properties will apply the specified language.
     *
     * @param {string} [options.pragma] By default, Bing returns cached content, if
     * available. To prevent Bing from returning cached content, set the Pragma
     * header to no-cache (for example, Pragma: no-cache).
     *
     * @param {string} [options.userAgent] The user agent originating the request.
     * Bing uses the user agent to provide mobile users with an optimized
     * experience. Although optional, you are strongly encouraged to always specify
     * this header. The user-agent should be the same string that any commonly used
     * browser would send. For information about user agents, see [RFC
     * 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     *
     * @param {string} [options.clientId] Bing uses this header to provide users
     * with consistent behavior across Bing API calls. Bing often flights new
     * features and improvements, and it uses the client ID as a key for assigning
     * traffic on different flights. If you do not use the same client ID for a
     * user across multiple requests, then Bing may assign the user to multiple
     * conflicting flights. Being assigned to multiple conflicting flights can lead
     * to an inconsistent user experience. For example, if the second request has a
     * different flight assignment than the first, the experience may be
     * unexpected. Also, Bing can use the client ID to tailor web results to that
     * client ID’s search history, providing a richer experience for the user. Bing
     * also uses this header to help improve result rankings by analyzing the
     * activity generated by a client ID. The relevance improvements help with
     * better quality of results delivered by Bing APIs and in turn enables higher
     * click-through rates for the API consumer. IMPORTANT: Although optional, you
     * should consider this header required. Persisting the client ID across
     * multiple requests for the same end user and device combination enables 1)
     * the API consumer to receive a consistent user experience, and 2) higher
     * click-through rates via better quality of results from the Bing APIs. Each
     * user that uses your application on the device must have a unique, Bing
     * generated client ID. If you do not include this header in the request, Bing
     * generates an ID and returns it in the X-MSEdge-ClientID response header. The
     * only time that you should NOT include this header in a request is the first
     * time the user uses your app on that device. Use the client ID for each Bing
     * API request that your app makes for this user on the device. Persist the
     * client ID. To persist the ID in a browser app, use a persistent HTTP cookie
     * to ensure the ID is used across all sessions. Do not use a session cookie.
     * For other apps such as mobile apps, use the device's persistent storage to
     * persist the ID. The next time the user uses your app on that device, get the
     * client ID that you persisted. Bing responses may or may not include this
     * header. If the response includes this header, capture the client ID and use
     * it for all subsequent Bing requests for the user on that device. If you
     * include the X-MSEdge-ClientID, you must not include cookies in the request.
     *
     * @param {string} [options.clientIp] The IPv4 or IPv6 address of the client
     * device. The IP address is used to discover the user's location. Bing uses
     * the location information to determine safe search behavior. Although
     * optional, you are encouraged to always specify this header and the
     * X-Search-Location header. Do not obfuscate the address (for example, by
     * changing the last octet to 0). Obfuscating the address results in the
     * location not being anywhere near the device's actual location, which may
     * result in Bing serving erroneous results.
     *
     * @param {string} [options.location] A semicolon-delimited list of key/value
     * pairs that describe the client's geographical location. Bing uses the
     * location information to determine safe search behavior and to return
     * relevant local content. Specify the key/value pair as <key>:<value>. The
     * following are the keys that you use to specify the user's location. lat
     * (required): The latitude of the client's location, in degrees. The latitude
     * must be greater than or equal to -90.0 and less than or equal to +90.0.
     * Negative values indicate southern latitudes and positive values indicate
     * northern latitudes. long (required): The longitude of the client's location,
     * in degrees. The longitude must be greater than or equal to -180.0 and less
     * than or equal to +180.0. Negative values indicate western longitudes and
     * positive values indicate eastern longitudes. re (required): The radius, in
     * meters, which specifies the horizontal accuracy of the coordinates. Pass the
     * value returned by the device's location service. Typical values might be 22m
     * for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP
     * lookup. ts (optional): The UTC UNIX timestamp of when the client was at the
     * location. (The UNIX timestamp is the number of seconds since January 1,
     * 1970.) head (optional): The client's relative heading or direction of
     * travel. Specify the direction of travel as degrees from 0 through 360,
     * counting clockwise relative to true north. Specify this key only if the sp
     * key is nonzero. sp (optional): The horizontal velocity (speed), in meters
     * per second, that the client device is traveling. alt (optional): The
     * altitude of the client device, in meters. are (optional): The radius, in
     * meters, that specifies the vertical accuracy of the coordinates. Specify
     * this key only if you specify the alt key. Although many of the keys are
     * optional, the more information that you provide, the more accurate the
     * location results are. Although optional, you are encouraged to always
     * specify the user's geographical location. Providing the location is
     * especially important if the client's IP address does not accurately reflect
     * the user's physical location (for example, if the client uses VPN). For
     * optimal results, you should include this header and the X-MSEdge-ClientIP
     * header, but at a minimum, you should include this header.
     *
     * @param {number} [options.answerCount] The number of answers that you want
     * the response to include. The answers that Bing returns are based on ranking.
     * For example, if Bing returns webpages, images, videos, and relatedSearches
     * for a request and you set this parameter to two (2), the response includes
     * webpages and images.If you included the responseFilter query parameter in
     * the same request and set it to webpages and news, the response would include
     * only webpages.
     *
     * @param {string} [options.countryCode] A 2-character country code of the
     * country where the results come from. This API supports only the United
     * States market. If you specify this query parameter, it must be set to us. If
     * you set this parameter, you must also specify the Accept-Language header.
     * Bing uses the first supported language it finds from the languages list, and
     * combine that language with the country code that you specify to determine
     * the market to return results for. If the languages list does not include a
     * supported language, Bing finds the closest language and market that supports
     * the request, or it may use an aggregated or default market for the results
     * instead of a specified one. You should use this query parameter and the
     * Accept-Language query parameter only if you specify multiple languages;
     * otherwise, you should use the mkt and setLang query parameters. This
     * parameter and the mkt query parameter are mutually exclusive—do not specify
     * both.
     *
     * @param {number} [options.count] The number of search results to return in
     * the response. The default is 10 and the maximum value is 50. The actual
     * number delivered may be less than requested.Use this parameter along with
     * the offset parameter to page results.For example, if your user interface
     * displays 10 search results per page, set count to 10 and offset to 0 to get
     * the first page of results. For each subsequent page, increment offset by 10
     * (for example, 0, 10, 20). It is possible for multiple pages to include some
     * overlap in results.
     *
     * @param {string} [options.freshness] Filter search results by the following
     * age values: Day—Return webpages that Bing discovered within the last 24
     * hours. Week—Return webpages that Bing discovered within the last 7 days.
     * Month—Return webpages that discovered within the last 30 days. This filter
     * applies only to webpage results and not to the other results such as news
     * and images. Possible values include: 'Day', 'Week', 'Month'
     *
     * @param {string} [options.market] The market where the results come from.
     * Typically, mkt is the country where the user is making the request from.
     * However, it could be a different country if the user is not located in a
     * country where Bing delivers results. The market must be in the form
     * <language code>-<country code>. For example, en-US. The string is case
     * insensitive. If known, you are encouraged to always specify the market.
     * Specifying the market helps Bing route the request and return an appropriate
     * and optimal response. If you specify a market that is not listed in Market
     * Codes, Bing uses a best fit market code based on an internal mapping that is
     * subject to change. This parameter and the cc query parameter are mutually
     * exclusive—do not specify both.
     *
     * @param {number} [options.offset] The zero-based offset that indicates the
     * number of search results to skip before returning results. The default is 0.
     * The offset should be less than (totalEstimatedMatches - count). Use this
     * parameter along with the count parameter to page results. For example, if
     * your user interface displays 10 search results per page, set count to 10 and
     * offset to 0 to get the first page of results. For each subsequent page,
     * increment offset by 10 (for example, 0, 10, 20). it is possible for multiple
     * pages to include some overlap in results.
     *
     * @param {array} [options.promote] A comma-delimited list of answers that you
     * want the response to include regardless of their ranking. For example, if
     * you set answerCount) to two (2) so Bing returns the top two ranked answers,
     * but you also want the response to include news, you'd set promote to news.
     * If the top ranked answers are webpages, images, videos, and relatedSearches,
     * the response includes webpages and images because news is not a ranked
     * answer. But if you set promote to video, Bing would promote the video answer
     * into the response and return webpages, images, and videos. The answers that
     * you want to promote do not count against the answerCount limit. For example,
     * if the ranked answers are news, images, and videos, and you set answerCount
     * to 1 and promote to news, the response contains news and images. Or, if the
     * ranked answers are videos, images, and news, the response contains videos
     * and news. Possible values are Computation, Images, News, RelatedSearches,
     * SpellSuggestions, TimeZone, Videos, Webpages. Use only if you specify
     * answerCount.
     *
     * @param {array} [options.responseFilter] A comma-delimited list of answers to
     * include in the response. If you do not specify this parameter, the response
     * includes all search answers for which there's relevant data. Possible filter
     * values are Computation, Images, News, RelatedSearches, SpellSuggestions,
     * TimeZone, Videos, Webpages. Although you may use this filter to get a single
     * answer, you should instead use the answer-specific endpoint in order to get
     * richer results. For example, to receive only images, send the request to one
     * of the Image Search API endpoints. The RelatedSearches and SpellSuggestions
     * answers do not support a separate endpoint like the Image Search API does
     * (only the Web Search API returns them). To include answers that would
     * otherwise be excluded because of ranking, see the promote query parameter.
     *
     * @param {string} [options.safeSearch] A filter used to filter adult content.
     * Off: Return webpages with adult text, images, or videos. Moderate: Return
     * webpages with adult text, but not adult images or videos. Strict: Do not
     * return webpages with adult text, images, or videos. The default is Moderate.
     * If the request comes from a market that Bing's adult policy requires that
     * safeSearch is set to Strict, Bing ignores the safeSearch value and uses
     * Strict. If you use the site: query operator, there is the chance that the
     * response may contain adult content regardless of what the safeSearch query
     * parameter is set to. Use site: only if you are aware of the content on the
     * site and your scenario supports the possibility of adult content. Possible
     * values include: 'Off', 'Moderate', 'Strict'
     *
     * @param {string} [options.setLang] The language to use for user interface
     * strings. Specify the language using the ISO 639-1 2-letter language code.
     * For example, the language code for English is EN. The default is EN
     * (English). Although optional, you should always specify the language.
     * Typically, you set setLang to the same language specified by mkt unless the
     * user wants the user interface strings displayed in a different language.
     * This parameter and the Accept-Language header are mutually exclusive; do not
     * specify both. A user interface string is a string that's used as a label in
     * a user interface. There are few user interface strings in the JSON response
     * objects. Also, any links to Bing.com properties in the response objects
     * apply the specified language.
     *
     * @param {boolean} [options.textDecorations] A Boolean value that determines
     * whether display strings should contain decoration markers such as hit
     * highlighting characters. If true, the strings may include markers. The
     * default is false. To specify whether to use Unicode characters or HTML tags
     * as the markers, see the textFormat query parameter.
     *
     * @param {string} [options.textFormat] The type of markers to use for text
     * decorations (see the textDecorations query parameter). Possible values are
     * Raw—Use Unicode characters to mark content that needs special formatting.
     * The Unicode characters are in the range E000 through E019. For example, Bing
     * uses E000 and E001 to mark the beginning and end of query terms for hit
     * highlighting. HTML—Use HTML tags to mark content that needs special
     * formatting. For example, use <b> tags to highlight query terms in display
     * strings. The default is Raw. For display strings that contain escapable HTML
     * characters such as <, >, and &, if textFormat is set to HTML, Bing escapes
     * the characters as appropriate (for example, < is escaped to &lt;). Possible
     * values include: 'Raw', 'Html'
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<SearchResponse>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    searchWithHttpOperationResponse(query: string, options?: { acceptLanguage? : string, pragma? : string, userAgent? : string, clientId? : string, clientIp? : string, location? : string, answerCount? : number, countryCode? : string, count? : number, freshness? : string, market? : string, offset? : number, promote? : string[], responseFilter? : string[], safeSearch? : string, setLang? : string, textDecorations? : boolean, textFormat? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SearchResponse>>;

    /**
     * @summary The Web Search API lets you send a search query to Bing and get
     * back search results that include links to webpages, images, and more.
     *
     * @param {string} query The user's search query term. The term may not be
     * empty. The term may contain Bing Advanced Operators. For example, to limit
     * results to a specific domain, use the site: operator.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.acceptLanguage] A comma-delimited list of one or
     * more languages to use for user interface strings. The list is in decreasing
     * order of preference. For additional information, including expected format,
     * see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This
     * header and the setLang query parameter are mutually exclusive; do not
     * specify both. If you set this header, you must also specify the cc query
     * parameter. Bing will use the first supported language it finds from the
     * list, and combine that language with the cc parameter value to determine the
     * market to return results for. If the list does not include a supported
     * language, Bing will find the closest language and market that supports the
     * request, and may use an aggregated or default market for the results instead
     * of a specified one. You should use this header and the cc query parameter
     * only if you specify multiple languages; otherwise, you should use the mkt
     * and setLang query parameters. A user interface string is a string that's
     * used as a label in a user interface. There are very few user interface
     * strings in the JSON response objects. Any links in the response objects to
     * Bing.com properties will apply the specified language.
     *
     * @param {string} [options.pragma] By default, Bing returns cached content, if
     * available. To prevent Bing from returning cached content, set the Pragma
     * header to no-cache (for example, Pragma: no-cache).
     *
     * @param {string} [options.userAgent] The user agent originating the request.
     * Bing uses the user agent to provide mobile users with an optimized
     * experience. Although optional, you are strongly encouraged to always specify
     * this header. The user-agent should be the same string that any commonly used
     * browser would send. For information about user agents, see [RFC
     * 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     *
     * @param {string} [options.clientId] Bing uses this header to provide users
     * with consistent behavior across Bing API calls. Bing often flights new
     * features and improvements, and it uses the client ID as a key for assigning
     * traffic on different flights. If you do not use the same client ID for a
     * user across multiple requests, then Bing may assign the user to multiple
     * conflicting flights. Being assigned to multiple conflicting flights can lead
     * to an inconsistent user experience. For example, if the second request has a
     * different flight assignment than the first, the experience may be
     * unexpected. Also, Bing can use the client ID to tailor web results to that
     * client ID’s search history, providing a richer experience for the user. Bing
     * also uses this header to help improve result rankings by analyzing the
     * activity generated by a client ID. The relevance improvements help with
     * better quality of results delivered by Bing APIs and in turn enables higher
     * click-through rates for the API consumer. IMPORTANT: Although optional, you
     * should consider this header required. Persisting the client ID across
     * multiple requests for the same end user and device combination enables 1)
     * the API consumer to receive a consistent user experience, and 2) higher
     * click-through rates via better quality of results from the Bing APIs. Each
     * user that uses your application on the device must have a unique, Bing
     * generated client ID. If you do not include this header in the request, Bing
     * generates an ID and returns it in the X-MSEdge-ClientID response header. The
     * only time that you should NOT include this header in a request is the first
     * time the user uses your app on that device. Use the client ID for each Bing
     * API request that your app makes for this user on the device. Persist the
     * client ID. To persist the ID in a browser app, use a persistent HTTP cookie
     * to ensure the ID is used across all sessions. Do not use a session cookie.
     * For other apps such as mobile apps, use the device's persistent storage to
     * persist the ID. The next time the user uses your app on that device, get the
     * client ID that you persisted. Bing responses may or may not include this
     * header. If the response includes this header, capture the client ID and use
     * it for all subsequent Bing requests for the user on that device. If you
     * include the X-MSEdge-ClientID, you must not include cookies in the request.
     *
     * @param {string} [options.clientIp] The IPv4 or IPv6 address of the client
     * device. The IP address is used to discover the user's location. Bing uses
     * the location information to determine safe search behavior. Although
     * optional, you are encouraged to always specify this header and the
     * X-Search-Location header. Do not obfuscate the address (for example, by
     * changing the last octet to 0). Obfuscating the address results in the
     * location not being anywhere near the device's actual location, which may
     * result in Bing serving erroneous results.
     *
     * @param {string} [options.location] A semicolon-delimited list of key/value
     * pairs that describe the client's geographical location. Bing uses the
     * location information to determine safe search behavior and to return
     * relevant local content. Specify the key/value pair as <key>:<value>. The
     * following are the keys that you use to specify the user's location. lat
     * (required): The latitude of the client's location, in degrees. The latitude
     * must be greater than or equal to -90.0 and less than or equal to +90.0.
     * Negative values indicate southern latitudes and positive values indicate
     * northern latitudes. long (required): The longitude of the client's location,
     * in degrees. The longitude must be greater than or equal to -180.0 and less
     * than or equal to +180.0. Negative values indicate western longitudes and
     * positive values indicate eastern longitudes. re (required): The radius, in
     * meters, which specifies the horizontal accuracy of the coordinates. Pass the
     * value returned by the device's location service. Typical values might be 22m
     * for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP
     * lookup. ts (optional): The UTC UNIX timestamp of when the client was at the
     * location. (The UNIX timestamp is the number of seconds since January 1,
     * 1970.) head (optional): The client's relative heading or direction of
     * travel. Specify the direction of travel as degrees from 0 through 360,
     * counting clockwise relative to true north. Specify this key only if the sp
     * key is nonzero. sp (optional): The horizontal velocity (speed), in meters
     * per second, that the client device is traveling. alt (optional): The
     * altitude of the client device, in meters. are (optional): The radius, in
     * meters, that specifies the vertical accuracy of the coordinates. Specify
     * this key only if you specify the alt key. Although many of the keys are
     * optional, the more information that you provide, the more accurate the
     * location results are. Although optional, you are encouraged to always
     * specify the user's geographical location. Providing the location is
     * especially important if the client's IP address does not accurately reflect
     * the user's physical location (for example, if the client uses VPN). For
     * optimal results, you should include this header and the X-MSEdge-ClientIP
     * header, but at a minimum, you should include this header.
     *
     * @param {number} [options.answerCount] The number of answers that you want
     * the response to include. The answers that Bing returns are based on ranking.
     * For example, if Bing returns webpages, images, videos, and relatedSearches
     * for a request and you set this parameter to two (2), the response includes
     * webpages and images.If you included the responseFilter query parameter in
     * the same request and set it to webpages and news, the response would include
     * only webpages.
     *
     * @param {string} [options.countryCode] A 2-character country code of the
     * country where the results come from. This API supports only the United
     * States market. If you specify this query parameter, it must be set to us. If
     * you set this parameter, you must also specify the Accept-Language header.
     * Bing uses the first supported language it finds from the languages list, and
     * combine that language with the country code that you specify to determine
     * the market to return results for. If the languages list does not include a
     * supported language, Bing finds the closest language and market that supports
     * the request, or it may use an aggregated or default market for the results
     * instead of a specified one. You should use this query parameter and the
     * Accept-Language query parameter only if you specify multiple languages;
     * otherwise, you should use the mkt and setLang query parameters. This
     * parameter and the mkt query parameter are mutually exclusive—do not specify
     * both.
     *
     * @param {number} [options.count] The number of search results to return in
     * the response. The default is 10 and the maximum value is 50. The actual
     * number delivered may be less than requested.Use this parameter along with
     * the offset parameter to page results.For example, if your user interface
     * displays 10 search results per page, set count to 10 and offset to 0 to get
     * the first page of results. For each subsequent page, increment offset by 10
     * (for example, 0, 10, 20). It is possible for multiple pages to include some
     * overlap in results.
     *
     * @param {string} [options.freshness] Filter search results by the following
     * age values: Day—Return webpages that Bing discovered within the last 24
     * hours. Week—Return webpages that Bing discovered within the last 7 days.
     * Month—Return webpages that discovered within the last 30 days. This filter
     * applies only to webpage results and not to the other results such as news
     * and images. Possible values include: 'Day', 'Week', 'Month'
     *
     * @param {string} [options.market] The market where the results come from.
     * Typically, mkt is the country where the user is making the request from.
     * However, it could be a different country if the user is not located in a
     * country where Bing delivers results. The market must be in the form
     * <language code>-<country code>. For example, en-US. The string is case
     * insensitive. If known, you are encouraged to always specify the market.
     * Specifying the market helps Bing route the request and return an appropriate
     * and optimal response. If you specify a market that is not listed in Market
     * Codes, Bing uses a best fit market code based on an internal mapping that is
     * subject to change. This parameter and the cc query parameter are mutually
     * exclusive—do not specify both.
     *
     * @param {number} [options.offset] The zero-based offset that indicates the
     * number of search results to skip before returning results. The default is 0.
     * The offset should be less than (totalEstimatedMatches - count). Use this
     * parameter along with the count parameter to page results. For example, if
     * your user interface displays 10 search results per page, set count to 10 and
     * offset to 0 to get the first page of results. For each subsequent page,
     * increment offset by 10 (for example, 0, 10, 20). it is possible for multiple
     * pages to include some overlap in results.
     *
     * @param {array} [options.promote] A comma-delimited list of answers that you
     * want the response to include regardless of their ranking. For example, if
     * you set answerCount) to two (2) so Bing returns the top two ranked answers,
     * but you also want the response to include news, you'd set promote to news.
     * If the top ranked answers are webpages, images, videos, and relatedSearches,
     * the response includes webpages and images because news is not a ranked
     * answer. But if you set promote to video, Bing would promote the video answer
     * into the response and return webpages, images, and videos. The answers that
     * you want to promote do not count against the answerCount limit. For example,
     * if the ranked answers are news, images, and videos, and you set answerCount
     * to 1 and promote to news, the response contains news and images. Or, if the
     * ranked answers are videos, images, and news, the response contains videos
     * and news. Possible values are Computation, Images, News, RelatedSearches,
     * SpellSuggestions, TimeZone, Videos, Webpages. Use only if you specify
     * answerCount.
     *
     * @param {array} [options.responseFilter] A comma-delimited list of answers to
     * include in the response. If you do not specify this parameter, the response
     * includes all search answers for which there's relevant data. Possible filter
     * values are Computation, Images, News, RelatedSearches, SpellSuggestions,
     * TimeZone, Videos, Webpages. Although you may use this filter to get a single
     * answer, you should instead use the answer-specific endpoint in order to get
     * richer results. For example, to receive only images, send the request to one
     * of the Image Search API endpoints. The RelatedSearches and SpellSuggestions
     * answers do not support a separate endpoint like the Image Search API does
     * (only the Web Search API returns them). To include answers that would
     * otherwise be excluded because of ranking, see the promote query parameter.
     *
     * @param {string} [options.safeSearch] A filter used to filter adult content.
     * Off: Return webpages with adult text, images, or videos. Moderate: Return
     * webpages with adult text, but not adult images or videos. Strict: Do not
     * return webpages with adult text, images, or videos. The default is Moderate.
     * If the request comes from a market that Bing's adult policy requires that
     * safeSearch is set to Strict, Bing ignores the safeSearch value and uses
     * Strict. If you use the site: query operator, there is the chance that the
     * response may contain adult content regardless of what the safeSearch query
     * parameter is set to. Use site: only if you are aware of the content on the
     * site and your scenario supports the possibility of adult content. Possible
     * values include: 'Off', 'Moderate', 'Strict'
     *
     * @param {string} [options.setLang] The language to use for user interface
     * strings. Specify the language using the ISO 639-1 2-letter language code.
     * For example, the language code for English is EN. The default is EN
     * (English). Although optional, you should always specify the language.
     * Typically, you set setLang to the same language specified by mkt unless the
     * user wants the user interface strings displayed in a different language.
     * This parameter and the Accept-Language header are mutually exclusive; do not
     * specify both. A user interface string is a string that's used as a label in
     * a user interface. There are few user interface strings in the JSON response
     * objects. Also, any links to Bing.com properties in the response objects
     * apply the specified language.
     *
     * @param {boolean} [options.textDecorations] A Boolean value that determines
     * whether display strings should contain decoration markers such as hit
     * highlighting characters. If true, the strings may include markers. The
     * default is false. To specify whether to use Unicode characters or HTML tags
     * as the markers, see the textFormat query parameter.
     *
     * @param {string} [options.textFormat] The type of markers to use for text
     * decorations (see the textDecorations query parameter). Possible values are
     * Raw—Use Unicode characters to mark content that needs special formatting.
     * The Unicode characters are in the range E000 through E019. For example, Bing
     * uses E000 and E001 to mark the beginning and end of query terms for hit
     * highlighting. HTML—Use HTML tags to mark content that needs special
     * formatting. For example, use <b> tags to highlight query terms in display
     * strings. The default is Raw. For display strings that contain escapable HTML
     * characters such as <, >, and &, if textFormat is set to HTML, Bing escapes
     * the characters as appropriate (for example, < is escaped to &lt;). Possible
     * values include: 'Raw', 'Html'
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {SearchResponse} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {SearchResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link SearchResponse} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    search(query: string, options?: { acceptLanguage? : string, pragma? : string, userAgent? : string, clientId? : string, clientIp? : string, location? : string, answerCount? : number, countryCode? : string, count? : number, freshness? : string, market? : string, offset? : number, promote? : string[], responseFilter? : string[], safeSearch? : string, setLang? : string, textDecorations? : boolean, textFormat? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.SearchResponse>;
    search(query: string, callback: ServiceCallback<models.SearchResponse>): void;
    search(query: string, options: { acceptLanguage? : string, pragma? : string, userAgent? : string, clientId? : string, clientIp? : string, location? : string, answerCount? : number, countryCode? : string, count? : number, freshness? : string, market? : string, offset? : number, promote? : string[], responseFilter? : string[], safeSearch? : string, setLang? : string, textDecorations? : boolean, textFormat? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SearchResponse>): void;
}
