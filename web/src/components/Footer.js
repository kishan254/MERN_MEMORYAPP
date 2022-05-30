import React from "react";
import { Button } from "semantic-ui-react";

const AppFooter = () => {
  return (
    <main>
      <h1 className="footer-header"> About Developers </h1>

      <p className="footer-description">
        We are students of a coding bootcamp and we are training to become
        Full-Stack Developers
      </p>
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGmeFumq6r34g/profile-displayphoto-shrink_800_800/0/1647438204966?e=1659571200&v=beta&t=v-IeHlNDv7l05BNCWpOPBpjRB23-In0q6Mph4l6VtNU"
              alt="no connection"
            />
          </div>
          <div class="content">
            <div class="header">Kishan Gosrani</div>
            
              
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/kishan-gosrani/"
                  >
                    LinkedIn
                  </a>
                  </Button>
                </p>
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="https://github.com/kishan254/"
                  >
                    Github
                  </a>
                  </Button>
                </p>
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="mailto:kishan.gosrani@hotmail.com"
                  >
                    eMail
                  </a>
                  </Button>
                </p>
            </div>
          </div>
          <div class="card">
          <div class="image">
            <img
              src="https://avatars.githubusercontent.com/u/81265936?v=4"
              alt="no connection"
            />
          </div>
          <div class="content">
            <div class="header">Yi-Tsun Chen</div>
            <div class="description">
              
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/yi-tsun-chen-623492205/"
                  >
                    LinkedIn
                  </a>
                  </Button>
                </p>
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="https://github.com/chentriangoes"
                  >
                    Github
                  </a>
                  </Button>
                </p>
                <p>
                <Button class="ui primary button">
                  <a
                    className="footer-link"
                    href="mailto:chentriangoes@gmail.com"
                  >
                    eMail
                  </a>
                  </Button>
                </p>
              
            </div>
          </div>
      </div>
      </div>
    <h2> Link to this projects Github Repo</h2>
    <Button class="ui primary button">
        <a href="https://github.com/kishan254/MERN_MEMORYAPP"> Repository</a>
    </Button>

    </main>
  );
};

export default AppFooter;
