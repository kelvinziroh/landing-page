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
function buildNavBar(){
    createUnorderedList();
    navigation.style.visibility = 'hidden';
    let isScrolling;
    window.addEventListener('scroll', function(evt){ // listening to the scroll event
        navigation.style.visibility = 'visible';
        window.clearTimeout(isScrolling); // clear timeout throughout scrolling
        isScrolling = setTimeout(function(){ // set a timeout to run after scrolling
            navigation.style.visibility = 'hidden';
        }, 5000);
    }, false);
}


// Add class 'active' to section when near top of viewport
function toggleActiveSection(){
    for (section of sections){
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}


// scrolls to the section clicked into viewport
function scrollSectionIntoView(evt){
    evt.preventDefault();
    const targetElement = evt.target;
    const htmlElement = document.querySelector('html');
    htmlElement.style.cssText = 'scroll-behavior: smooth;';
    for (sectionId of sectionIds){
        if(sectionId === targetElement.textContent){
            document.getElementById(sectionId).scrollIntoView(true);
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar, false);

// Scroll to section on link click

// Set sections as active
