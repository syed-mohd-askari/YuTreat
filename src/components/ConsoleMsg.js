const ConsoleMsg = () => {
    const commonStyles = "color: yellow; background: black; font-size: 15px; font-family: 'Poppins', sans-serif; padding: 5px; border: 2px solid red; border-radius: 5px; width: 100%; text-align: center;"
    return (  

        <span>
            

            {/* // Concatenating all messages into a single console log */}
            {console.log(
            "%c   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ⚠️ WARNING ⚠️  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ " + 
            "%c \n**************************************************\n" + 
            "⚙️  WEBSITE UNDER DEVELOPMENT ⚙️\n" +
            "------------------------------------------------\n" +
            "I am still learning, exploring and experimenting.\n" +
            "If you encounter any issues, please report the bug on github.\n" +
            "Thanks for visiting!\n" +
            "------------------------------------------------\n" +
            "💻 Website designed by: Syed Mohd Askari 💻\n" +
            "**************************************************",
            commonStyles, // Styles for the warning message
            "color: lightgreen; font-weight: bold,text-align: center;font-size: 12px" // Styles for the rest of the message
            )
            }
        </span>

    )
}

export default ConsoleMsg