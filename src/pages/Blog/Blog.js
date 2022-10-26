import React from 'react';

const Blog = () => {
    return (
        <div className='container border border-4 border-warning mt-5 bg-dark'>
        <div className='text-center text-white border border-2 border-info my-3 py-3 rounded-3'>
              <h2 className='text-info fw-bold'>what is cors?</h2>
              <p className=''>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
          </div>
          <div className='text-center text-white border border-2 border-success my-3 py-3 rounded-3'>
              <h2 className='text-success fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
              <p className=''>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. The other options except firebase to implement authenticate are 1.STYTCH, 2.Ory, 3.Supabase, 4.Okta, 5.PingIdentity, 6.Keycloak, 7.Frontegg, 8.Authress.</p>
          </div>
          <div className='text-center text-white border border-2 border-danger my-3 py-3 rounded-3'>
              <h2 className='text-danger fw-bold'>How does the private route work?</h2>
              <p className=''>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
          </div>
          <div className='text-center text-white border border-2 border-secondary my-3 py-3 rounded-3'>
              <h2 className='text-warning fw-bold'>What is Node? How does Node work?</h2>
              <p className=''>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
          </div>
      </div>
    );
};

export default Blog;