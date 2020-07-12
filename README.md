# Password-Generator
The goal of this project was to create a password generator with certain criteria. It was probably the most difficult project I've ever made , I've easily spent over 40 hours on it, but I've learned a lot! Heres my breakdown:

## Variables
The first thing that came to mind was creating variables that could store the character strings that'll be referenced later when generating the password. We could use an array here, but opted using this method to make things a little cleaner. Onced I had defined those variables, I also needed to store the generated password with the 'passAccum' variable, which accumulates characters for the password, and the 'accept' variable which stores all possible characters the user agrees to. Then I had to create a varible to store the input for the password's length, and check it to make sure it met certain conditions. In this case, it needed to be between 8-128 characters; if the user inputs something that wasn't a number or wasn't between 8-128, then the program will continue to prompt until an acceptable input is gathered.
![Variables](https://user-images.githubusercontent.com/66426144/87251545-7ea34d00-c43a-11ea-9c83-6b4884c571e9.png)

## Booleans
In order to know what character sets the user wants, I needed to create response booleans and store the information recieved in variables. If the user clicked cancel for each confirm ie, made them all false, then the code would return a statement asking the user to confirm at least one of them since you cant make a password with no characters.  
![Booleans](https://user-images.githubusercontent.com/66426144/87251570-a397c000-c43a-11ea-8da7-cf23a1ce881b.png)

## Accumulator 
If one or more of the confirm booleans are true, then the related character sets are appended onto the accept variable. Now we have the for loop that generates the password string where a character is chosen by randomizing the index number of string sets within 'accept' and appending the result onto passAccum for each character until the password length is achieved. We have this within a 'do' because it gaurantees that the first loop iteration runs, and the 'while' conditional checks to see if it generated according to the specified criteria; if not then it repeats the loop to generate a different password.
![CharacterStrings](https://user-images.githubusercontent.com/66426144/87251583-b6aa9000-c43a-11ea-8764-779da4844938.png)

## Character Check
The function 'hasAny' returns true if characters in the parameter 'anyOf' are found in parameter 'str'. The conditional inside of the for loop checks this for every character of 'anyOf' and returns true if the character is found in the 'str' string. It continues checking each character up until the length of 'anyOf' and then returns false if it fails to find a match. The password is then printed to the page with the function 'writePassword' upon 'generateBtn' getting clicked. 
![Return](https://user-images.githubusercontent.com/66426144/87251626-f8d3d180-c43a-11ea-93b3-0c09adf77a7c.png)


## Credits
[Mozilla Developer](https://developer.mozilla.org/)
[W3Schools](https://w3schools.com)
[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)