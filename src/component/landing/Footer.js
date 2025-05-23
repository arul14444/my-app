import React from "react";
let Footer = () => {
  return (
    <section>
      <div class="bg-white py-5 border-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-4">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                alt="Notion Logo"
              />
              <span class="ms-2 fw-bold">Notion</span>
              <div class="mt-3 d-flex gap-3">
                <i class="bi bi-instagram">
                  <svg class="shareInstagram" viewBox="0 0 18 18">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 1.621c2.405 0 2.689.011 3.635.053.879.039 1.354.186 1.67.309.418.162.721.359 1.034.671.316.316.51.615.675 1.034.123.316.271.795.309 1.67.042.949.053 1.234.053 3.635s-.011 2.689-.053 3.635c-.039.879-.186 1.354-.309 1.67a2.802 2.802 0 01-.671 1.034c-.316.316-.615.51-1.034.675-.316.123-.795.271-1.67.309-.949.042-1.234.053-3.635.053s-2.689-.011-3.635-.053c-.879-.039-1.354-.186-1.67-.309a2.802 2.802 0 01-1.034-.671 2.815 2.815 0 01-.675-1.034c-.123-.316-.271-.795-.309-1.67-.042-.949-.053-1.234-.053-3.635s.011-2.689.053-3.635c.039-.879.186-1.354.309-1.67.162-.418.359-.721.671-1.034.316-.316.615-.51 1.034-.675.316-.123.795-.271 1.67-.309.946-.042 1.23-.053 3.635-.053zM9 0C6.557 0 6.251.011 5.291.053 4.335.095 3.677.25 3.108.471a4.389 4.389 0 00-1.596 1.041A4.404 4.404 0 00.471 3.105C.25 3.678.095 4.332.053 5.288.011 6.251 0 6.557 0 9c0 2.443.011 2.749.053 3.709.042.956.197 1.614.418 2.183a4.389 4.389 0 001.041 1.596 4.392 4.392 0 001.593 1.037c.573.221 1.227.376 2.183.418.96.042 1.266.053 3.709.053s2.749-.011 3.709-.053c.956-.042 1.614-.197 2.183-.418a4.413 4.413 0 001.593-1.037c.5-.499.809-1.002 1.037-1.593.221-.573.376-1.227.418-2.183.042-.96.053-1.266.053-3.709s-.011-2.749-.053-3.709c-.042-.956-.197-1.614-.418-2.183a4.21 4.21 0 00-1.03-1.6A4.392 4.392 0 0014.896.474c-.573-.221-1.227-.376-2.183-.418C11.75.01 11.444 0 9 0zm0 4.377A4.625 4.625 0 004.377 9 4.625 4.625 0 009 13.623 4.625 4.625 0 0013.623 9 4.625 4.625 0 009 4.377zm0 7.622A3 3 0 119 6 3 3 0 019 12zm4.806-6.726a1.079 1.079 0 100-2.158 1.079 1.079 0 000 2.158z"
                    ></path>
                  </svg>
                </i>
                <i class="bi bi-twitter-x">
                  <svg class="shareX" viewBox="0 0 15 13">
                    <path d="M11.787.523h2.109L9.289 5.788l5.42 7.164h-4.244L7.142 8.607 3.34 12.952H1.23l4.927-5.631L.958.523H5.31l3.004 3.972L11.787.523Zm-.74 11.167h1.169L4.674 1.719H3.421l7.626 9.971Z"></path>
                  </svg>
                </i>
                <i class="bi bi-linkedin">
                  <svg class="shareLinkedIn" viewBox="0 0 16 16">
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h16v16H0z"></path>
                      </clipPath>
                    </defs>
                    <path d="M14.81 0H1.18C.53 0 0 .52 0 1.15v13.69C0 15.48.53 16 1.18 16h13.63c.65 0 1.18-.52 1.18-1.15V1.15c0-.64-.53-1.15-1.18-1.15ZM4.75 13.63H2.38V5.99h2.37v7.64ZM3.56 4.96c-.76 0-1.38-.62-1.38-1.37s.62-1.37 1.38-1.37 1.37.62 1.37 1.37-.62 1.37-1.37 1.37Zm10.07 8.67h-2.37V9.92c0-.88-.02-2.02-1.23-2.02s-1.42.97-1.42 1.96v3.77H6.24V5.99h2.27v1.04h.03c.32-.6 1.09-1.23 2.24-1.23 2.4 0 2.85 1.58 2.85 3.64v4.19Z"></path>
                  </svg>
                </i>
                <i class="bi bi-facebook">
                  <svg class="shareFacebook" viewBox="0 0 18 18">
                    <path d="M17.999 8.999c0-4.97-4.029-8.999-8.999-8.999s-8.999 4.029-8.999 8.999c0 4.492 3.291 8.215 7.593 8.89v-6.289h-2.285v-2.601h2.285v-1.983c0-2.255 1.344-3.501 3.399-3.501 0.985 0 2.015 0.176 2.015 0.176v2.215h-1.135c-1.118 0-1.467 0.694-1.467 1.405v1.688h2.496l-0.399 2.601h-2.097v6.289c4.302-0.675 7.593-4.398 7.593-8.89z"></path>
                  </svg>
                </i>
                <i class="bi bi-youtube">
                  <svg class="shareYouTube" viewBox="0 0 18 18">
                    <path d="M9 2.070c-8.845 0-9 0.787-9 6.93s0.155 6.93 9 6.93 9-0.787 9-6.93-0.155-6.93-9-6.93zM11.884 9.301l-4.041 1.886c-0.354 0.164-0.644-0.020-0.644-0.41v-3.553c0-0.39 0.29-0.574 0.644-0.41l4.041 1.886c0.354 0.166 0.354 0.436 0 0.601z"></path>
                  </svg>
                </i>
              </div>

              <div class="mt-4">
                <select class="form-select form-select-sm w-auto">
                  <option selected>🌐 English</option>
                </select>
                <div class="mt-3 small">
                  <a href="#">Do Not Sell or Share My Info</a>
                  <br />
                  <a href="#">Cookie settings</a>
                  <br />
                  <span class="text-muted">© 2025 Notion Labs, Inc.</span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <h6 class="fw-bold">Company</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
                <li>
                  <a href="#">Terms & privacy</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Download</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">iOS & Android</a>
                </li>
                <li>
                  <a href="#">Mac & Windows</a>
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Web Clipper</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Resources</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Notion for</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Enterprise</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">Personal</a>
                </li>
              </ul>
              <a href="#" class="fw-bold d-inline-block mt-2">
                Explore more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
