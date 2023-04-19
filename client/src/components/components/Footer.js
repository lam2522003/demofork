import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer_box wide">
                <span className="Footer_title">Follow us</span>
                <ul className="Footer_list">
                    <a href="https://facebook.com" className="Footer_item">
                        <svg fill="#a6a6a8" viewBox="0 0 24 24" class="_icon_jncl6f_3 _sizeM_jncl6f_12 wt-social-list__icon _icon_1e63mqc_525"><path d="M19.227 4H4.74a1.238 1.238 0 00-1.255 1.228v14.544A1.239 1.239 0 004.74 21h7.852v-5.881h-2.153v-2.47h2.153v-1.901a3.032 3.032 0 01.843-2.41 2.995 2.995 0 012.377-.898c.633.01 1.264.064 1.889.162v2.11h-1.067a1.213 1.213 0 00-1.309.788 1.228 1.228 0 00-.07.542v1.606h2.351l-.377 2.471h-1.974V21h3.972a1.243 1.243 0 001.258-1.227V5.228A1.24 1.24 0 0019.227 4z"></path></svg>
                        <span className="Footer_follow">Facebook</span>
                    </a>
                </ul>
                <ul className="Footer_list">
                    <a href="https://youtube.com" className="Footer_item">
                        <svg fill="#a6a6a8" viewBox="0 0 24 24" class="_wt-icon_73c86 _m_gegcf social-footer__icon"><path d="M21.79993,7.7356a4.80987,4.80987,0,0,0-.79456-2.1189,2.75914,2.75914,0,0,0-2.00378-.9021c-2.799-.217-6.9972-.217-6.9972-.217H11.995s-4.19812,0-6.99659.217a2.75983,2.75983,0,0,0-2.00378.9021,4.81806,4.81806,0,0,0-.79456,2.1189A34.36132,34.36132,0,0,0,2,11.18787v1.618a34.35272,34.35272,0,0,0,.20007,3.45288,4.8,4.8,0,0,0,.79456,2.11694,3.27043,3.27043,0,0,0,2.20508.91211C6.79956,19.45166,12,19.50232,12,19.50232s4.20264-.00745,7.00159-.22192a2.77147,2.77147,0,0,0,2.00378-.90406,4.80739,4.80739,0,0,0,.79456-2.11682A34.37352,34.37352,0,0,0,22,12.8064V11.18848A34.36535,34.36535,0,0,0,21.79993,7.7356ZM9.50232,15.75122V8.24878L15.75427,12Z"></path></svg>
                        <span className="Footer_follow">YouTube</span>
                    </a>
                </ul>
                <ul className="Footer_list">
                    <a href="https://twitter.com" className="Footer_item">
                        <svg fill="#a6a6a8" viewBox="0 0 24 24" class="_wt-icon_73c86 _m_gegcf social-footer__icon"><path d="M8.29 20.25A11.59 11.59 0 0020 8.78v-.73a8.3 8.3 0 002-2.13 8.36 8.36 0 01-2.36.65 4.16 4.16 0 001.81-2.27 8.19 8.19 0 01-2.61 1 4.11 4.11 0 00-7 3.75 11.7 11.7 0 01-8.45-4.3 4.11 4.11 0 001.27 5.48 4.06 4.06 0 01-1.86-.52 4.11 4.11 0 003.29 4 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.83 2.85A8.25 8.25 0 013 18.47a7.929 7.929 0 01-1-.06 11.69 11.69 0 006.29 1.84"></path></svg>
                        <span className="Footer_follow">Twitter</span>
                    </a>
                </ul>
                <ul className="Footer_list">
                    <a href="https://Tiktok.com" className="Footer_item">
                        <svg fill="#a6a6a8" viewBox="0 0 24 24" class="_icon_jncl6f_3 _sizeM_jncl6f_12 wt-social-list__icon _icon_1e63mqc_525"><path d="M9.712 9.616a5.69 5.69 0 0 0-5.554 5.688 5.68 5.68 0 0 0 1.529 3.878A5.68 5.68 0 0 0 9.85 21a5.7 5.7 0 0 0 5.691-5.696v-6.29a7.355 7.355 0 0 0 4.301 1.383V7.305a4.296 4.296 0 0 1-3.244-1.484A4.275 4.275 0 0 1 15.54 3h-3.094l-.004 12.4a2.6 2.6 0 0 1-2.593 2.503c-.867 0-1.63-.429-2.106-1.079a2.573 2.573 0 0 1-.492-1.515c0-1.433 1.165-2.6 2.598-2.6.267 0 .526.047.768.122V9.67a5.783 5.783 0 0 0-.768-.054"></path></svg>
                        <span className="Footer_follow">Tiktok</span>
                    </a>
                </ul>
                <ul className="Footer_list">
                    <a href="https://Linkedin.com" className="Footer_item">
                        <svg fill="#a6a6a8" viewBox="0 0 24 24" class="_icon_jncl6f_3 _sizeM_jncl6f_12 wt-social-list__icon _icon_1e63mqc_525"><path d="M4.84 4h14.487a1.241 1.241 0 011.258 1.228v14.544A1.24 1.24 0 0119.327 21H4.84a1.24 1.24 0 01-1.255-1.228V5.228A1.238 1.238 0 014.84 4zm1.264 14.488h2.524v-8.113H6.104v8.113zM7.367 9.26a1.46 1.46 0 10-1.351-.898 1.442 1.442 0 001.351.898zm8.184 9.227h2.521v-4.449c0-2.19-.472-3.862-3.025-3.862a2.644 2.644 0 00-2.385 1.303h-.035v-1.105H10.21v8.113h2.518v-4.014c0-1.058.2-2.087 1.512-2.087 1.294 0 1.311 1.208 1.311 2.153v3.948z"></path></svg>
                        <span className="Footer_follow">LinkedIn</span>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Footer; 