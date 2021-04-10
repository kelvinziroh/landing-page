/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); 
const navigation = document.querySelector('.page__header');
const sectionIds = getElementIds(sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * @description Gets the IDs of an element
 * @param {string} elements 
 * @returns {object} Array of element IDs
 */
function getElementIds(elements){
    elementIds = [];
    for (element of elements){
        elementIds.push(element.getAttribute('id')); 
    }
    return elementIds;
}


// Creates list items and appends them to unordered list element
function createUnorderedList(){
    const listElementsFragment = document.createDocumentFragment();
    const unorderedList = document.getElementById('navbar__list');
    for (sectionId of sectionIds){
        const newListElement = document.createElement('li');
        newListElement.innerHTML = `<a href='#${sectionId}' class='menu__link'>${sectionId}</a>`;
        listElementsFragment.appendChild(newListElement);
    }
    unorderedList.appendChild(listElementsFragment);
}


/**
 * @description Checks if a section is in viewport
 * @param {string} elem 
 * @returns {boolean} Value of whether or not a section is in viewport
 */
function isInViewport(elem) {
    const coordinates = elem.getBoundingClientRect();
    return (
        (coordinates.top >= -106 && coordinates.top <= 221) &&
        coordinates.left >= 0 &&
        coordinates.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        coordinates.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
