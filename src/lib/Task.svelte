<script>
    export let description = "";
    export let title = "";

    let completed = false;
</script>

<div class="card">
    <div class="container">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    <div><br /><br /><br /></div>
    <div class="cardButton">
        <button class="completed">Completed</button>
        <button class="delete">Delete</button>
    </div>
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
        display: flex;
        flex-direction: column; /* Stack items vertically */
        width: 25em; /* Set the width */
        position: relative; /* Enable relative positioning for child elements */
        /* margin: 0 auto; Center the card horizontally */
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    .container {
        flex: 1; /* Allow container to expand to fill available space */
        padding: 16px; /* Increase padding for better spacing */
        text-align: left;
        overflow: auto; /* Add overflow property to handle overflow text */
    }

    .cardButton {
        position: absolute; /* Position the buttons absolutely */
        bottom: 0; /* Align buttons to the bottom */
        right: 0; /* Align buttons to the right */
        padding: 16px; /* Add padding to separate buttons from edges */
    }

    .cardButton button {
        margin-left: 8px; /* Add some space between buttons */
        background-color: transparent; /* Set background color to transparent */
        border: 2.5px solid transparent; /* Set border to transparent */
        /* padding: 8px 16px; Add padding to buttons */
        cursor: pointer; /* Change cursor to pointer on hover */
        outline: none; /* Remove outline */
        border-radius: 5px;
        transition: all 0.3s ease; /* Add transition effect */
    }

    .cardButton button.completed {
        border-color: rgb(
            54,
            216,
            54
        ); /* Set border color to green for completed button */
        color: rgb(
            54,
            216,
            54
        ); /* Set text color to green for completed button */
    }

    .cardButton button.delete {
        border-color: rgb(
            236,
            16,
            16
        ); /* Set border color to red for delete button */
        color: rgb(199, 21, 21); /* Set text color to red for delete button */
    }

    .cardButton button:hover {
        background-color: rgba(
            0,
            0,
            0,
            0.05
        ); /* Change background color on hover */
    }

    .cardButton button:hover.completed {
        background-color: rgba(
            0,
            255,
            0,
            0.1
        ); /* Change background color on hover for completed button */
    }

    .cardButton button:hover.delete {
        background-color: rgba(
            255,
            0,
            0,
            0.1
        ); /* Change background color on hover for delete button */
    }
</style>
