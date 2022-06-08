import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='ml'>
            <h1 >Difference between authorization and authentication?</h1>
            <p className='paragraph'> what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='paragraph'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <h1>What other services does firebase provide other than authentication
            </h1>
            <p className='paragraph'> The goal of every developer is to create awesome apps.  If you’re a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.<br></br>
            Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.</p>
        </div>
    );
};

export default Blog;