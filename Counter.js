var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");

// Function to generate a unique session ID
function generateSessionId()
{
    let timestamp = new Date().getTime();
    let random = Math.random().toString(36).substring(2, 15);
    return `${timestamp}-${random}`;
}

// Get the stored session ID
let sessionId = sessionStorage.getItem('session_id');

// If no session ID, create one and store it
if (!sessionId)
{
    sessionId = generateSessionId();
    sessionStorage.setItem('session_id', sessionId);

    // Now that we have a session ID, check the localStorage for the visit count
    let visitCount = localStorage.getItem("page_view");

    if (visitCount)
    {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
    }
    else
    {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }

    counterContainer.innerHTML = visitCount;
}
else
{
    let visitCount = localStorage.getItem("page_view");

    if(visitCount)
    {
        counterContainer.innerHTML = visitCount;
    }
    else
    {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
        counterContainer.innerHTML = visitCount;
    }
}


// Check if resetButton is not null before adding the event listener
/*if (resetButton)
{
    resetButton.addEventListener("click", () =>
    {
        localStorage.removeItem("page_view");
        counterContainer.innerHTML = 0;
    });
}
else
{
    console.error("Reset button element not found. Check your HTML.");
}*/