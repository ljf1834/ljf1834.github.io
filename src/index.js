export default {
  async fetch(request) {
    const targetUrl = new URL(request.url);

    targetUrl.protocol = "http:";
    targetUrl.hostname = "2602-f9f3-0-2--749.sslip.io";
    targetUrl.port = "54630";
    targetUrl.pathname = "/sub";

    return fetch(new Request(targetUrl, request));
  }
};
