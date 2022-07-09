# Polly: An augmentative and alternative communication (AAC) device.

## Live project: https://glittery-chimera-ced3b0.netlify.app <br/>

<img src="https://media.giphy.com/media/8VNS16lrTj0PQMMFgt/giphy.gif" alt="Polly" />
<img src="https://media.giphy.com/media/AT4xzrpUgibYhdFRWj/giphy.gif" alt="Polly" height="300%" /> <br/>


# Overview

## Table of Contents
0. [Technologies Used](#Technologies)
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)

### Technologies Used: 
 1. Styled Components <br/>
 2. React Bootstrap <br/>
 3. Firebase <br/>
 4. ESLint <br/>
 5. FontSource <br/>
 6. Figma <br/>
 7. Azure Text to Speech <br/>
 8. Canva <br/>
 9. Netlify <br/>
10. Sortable JS <br/>


### Description
Polly is an augmentative and alternative communication (AAC) device for individuals that cannot communicate verbally. An augmentative and alternative communication (AAC) device, is a tablet or laptop that helps someone with a speech or language impairment to communicate. The term AAC device is often used interchangeably with terms like speech-generating device (SGD) or assistive communication device or simply communication device. AAC devices help users to communicate through a combination of words, sentences, and images that the device then “says out loud.” Polly is specially designed for young children. This app was inspired by my nephew, Liam. Liam is currently 4 years old and is on the autism spectrum. He is non-verbal and cannot physically communicate. With this app, Liam will be able to communicate his needs. He will be able to drag a photo or multiple ones, and have them read out loud. His parents will also be able to upload new photos to the database and add them so Liam will have more photos to select from. They will also be able to edit the profile section in order to show Liam's age, name and photo. 

### Information on AAC Devices: https://www.aphasia.com/aac-devices/what-is-an-aac-device/ <br/>
### Information on Austim: https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd#:~:text=Autism%20spectrum%20disorder%20(ASD)%20is,first%20two%20years%20of%20life.<br/>

### Lesson Learned
After hacing created this project, I learned how to use AWS Polly, and Azure text-to-speech. I also practiced using firebase and reading through all of the functions they have available. I really enjoyed designing the wireframes for the project. I also enjoyed doing research on people with Austim and how to design to their needs. The most difficult part was working with Azure for the first time. Azure had some difficulties working across browsers. Lastly, Sortable JS was also a bit difficult at times. However, I was able to figure it out after reading the documentation and doing trials. 

### Roles:
This project was developed by two people: Luis Brito, and Yannelly Mercado(Myself). Both developers were involved in the design, development, and testing of the project. 

### App Evaluation
- **Category:** Technology/ Assistive Technology
- **Tablet:** This app is primarily developed and designed to be used in a tablet device. It is currently designed as a desktop app in order to show functionality and design. 
- **Story:** Users can communicate their needs by selecting one or multiple photos, dropping them in the input bar, and having the photos read out loud. Users can also upload new photos along with a label. Lastly, users can edit and input their information in the profile section. 
- **Market:** This app is intended to be used for individuals with speech or language impairments. 
- **Habit:** This app is meant to be used multiple times a day, every day. 
- **Scope:** Ideally, this app would be available in any app store. It would provide an alternative to other AAC devices that might charge the user for using the app. 

## Product Spec
### 1. User Stories 

**Required Must-have Stories**

* User logs in to the Polly App or creates an account if user doesn't have one.
* User can drag and drop an image to the input bar and have it read out loud. 
* User can delete one or multiple images from input bar.
* User can delete a card by dragging it and dropping it on the trash icon.
* User can click on the speaker icon in order to have all cards/images to have it read. 
* User can upload an image along with its label and have it displayed on the home page.
* User can upload a new profile image and change the user information. 

**Additional features I would like to add:**

* Have the app be available on the app store and as a mobile app. 
* Include a confirmation view window for the delete card option.
* Include a caroussel for the photo section. 
* Allow the user to sign in with a Google account.

### 2. Screen Archetypes

* Login -> Users can log in if they have an account. 
* Sign Up -> Users can create an account if they do not have one yet.
* Home -> Users can browse through the photos, drag the photos to the input bar, and have it read by the speaker. 
* Upload -> Allows users to label photos and upload them to the database. 
* Profile -> Allows users to upload a new image and edit their information. 


### 3. Navigation

**Tab Navigation** 
* Log in/ Sign up
* Home
* Upload
* Profile

**Flow Navigation** (Screen to Screen)
* Log-in /Sign up -> Logs the user in and takes it to home. If there's no account, lets user create an account. 
* Home -> Takes user to the home page that includes all user cards(vocabulary).
* Upload -> Upload a photo, along with a label, to the home page.
* Profile -> Upload a new user photo, and edit the user information. 

## Wireframes
![Screen Shot 2022-07-05 at 4 47 40 PM](https://user-images.githubusercontent.com/91508647/177413686-01c4b5ce-773d-4e47-ae26-6a2e3ca53f8f.png)
![Screen Shot 2022-07-05 at 4 47 14 PM](https://user-images.githubusercontent.com/91508647/177413937-cf55e7eb-c542-45b9-9cff-94688f8ffd82.png)
![Screen Shot 2022-07-05 at 4 47 23 PM](https://user-images.githubusercontent.com/91508647/177413677-3fd55f76-520f-45e8-a835-29247f954733.png)


## Figma prototype: </br>
Live Prototype: [https://www.figma.com/proto/a7CQwAY8frhAVek2wA3bfh/Polly?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2](https://www.figma.com/proto/a7CQwAY8frhAVek2wA3bfh/Polly?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2)


### Digital Wireframes & Mockups

![Screen Shot 2022-07-06 at 2 45 30 PM](https://user-images.githubusercontent.com/91508647/177621105-8f513744-77c3-4dcf-994f-846a01d90c99.png)

### Interactive Prototype
<img src="https://media.giphy.com/media/6YXHxBrBEljnlAYbtS/giphy.gif" width=500>

### Design Systems
![Screen Shot 2022-07-06 at 3 01 34 PM](https://user-images.githubusercontent.com/91508647/177623662-72209243-3514-4a2f-80e3-ce372e9c9e44.png)

