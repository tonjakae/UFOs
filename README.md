# UFO Analysis

## Project Overview
This new assignment consists of one technical analysis deliverable and a written report:
* Deliverable 1: Filter UFO sightings on multiple criteria
* Deliverable 2: A written report on the UFO analysis

## Purpose
Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, I’ll add table filters for the city, state, country, and shape.

## Deliverable 1:
### Additional Filtering
Using JavaScript and HTML, I've modified the code in my index.html file to create more table filters. In addition to the date filter I created in the class module, I've added filters for the city, state, country, and shape, as shown in the image below.  

Enter in the criteria you are interested in filtering to.  I chose to filter to sightings with triangle-shaped objects.

![image](https://user-images.githubusercontent.com/87340105/156949534-701f1ba6-d162-42e0-85ea-aee352324444.png)

I replaced the handleClick() function in my app.js file with a new function that saves the element, value, and id of the filter that was changed. Then, I created a new function to loop through the dataset and keep only the results that match the search criteria. The webpage will update with the search criteria after pressing "Enter".  So as in the image above, enter the word "Triangle" and hit "Enter". The below image displays some of those results.

![image](https://user-images.githubusercontent.com/87340105/156949436-15db8c43-d472-48fd-870a-c86ed6366f07.png)

## Deliverable 2:
### Written Analysis

#### Summary:

There were a few drawbacks to the way the webpage performs as is written:

1.) There isn't a clear filters button to clear the data if you want to perform a new search.

2.) The data is case sensitive so I got no results when I typed in "Triangle" with a capital "T".

![image](https://user-images.githubusercontent.com/87340105/156950000-d95c8d7c-3ec6-4fed-a7b9-3239fa6c5c05.png)

![image](https://user-images.githubusercontent.com/87340105/156950045-1f6beccb-b15e-40f1-a563-585fd981acca.png)


#### Recommendations for further development:

1.) I would address the above drawbacks by adding a "Clear Results" filter button.

2.) I would add an additional script to allow for leeway in case sensitivity.

