<h1>Login-Register-Webpage</h1> 
A basic frontend project making a login/register page with password reset and profile view/edit functionalities, using REACT,HTML and CSS.
<h2>Login Email Verification Logic</h2>
We will Capture user registration data, including username, email, and password. Then, Generate a **unique verification token** and store it securely along with user data. After this, send a confirmation email containing a verification link with the token. Also, create a server-side verification endpoint (/verify) to process the verification. Then, Update login logic to check if the user's email is verified before allowing login. Be careful about handling expired tokens gracefully and prompt users to resend confirmation emails. Later, implement a **resend confirmation email** feature with a new verification token. We can also enhance security by hashing and salting passwords before storage.
<h2>Reset Password Verification Logic</h2>
Enabling users to reset their passwords is a straightforward process. When someone forgets their password, they can request a reset by providing their email address. To **ensure security**, a special token is created and linked to the user's account details, securely stored in a database. Following this, an email containing a unique link is sent to the user's email address. This link includes the generated token and directs them to a secure page for resetting their password. The system checks the validity of the token at the server endpoint, allowing users to reset their password only if the token is valid and within the designated time limit. Clicking the link prompts users to enter a new password, updating their account credentials in the database. To enhance security, the system ensures the password reset link is **only valid for a limited time**. This entire process safeguards user accounts and makes the password reset experience secure and user-friendly.
<h3>To Run our webpage locally, you need these dependecies.</h3>
1."@testing-library/jest-dom": "^5.17.0" </br>
2."@testing-library/react": "^13.4.0"</br>
3."@testing-library/user-event": "^13.5.0"</br>
4."react": "^18.2.0"</br>
5."react-dom": "^18.2.0"</br>
6."react-icons": "^5.0.1"  </br>
7."react-router-dom": "^6.21.3"</br>
8."react-scripts": "5.0.1"</br>
9."web-vitals": "^2.1.4"</br>
