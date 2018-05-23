var currentSides = 1;
function addSide() {
	currentSides++;
    document.getElementById('listOfSides').insertAdjacentHTML('beforeend', `
        <li id="s${currentSides}">
            <div class="side">
				<span>Length: </span>
				<input class="sideInput" title="Side Input for Perimeter of a Polygon" onchange="calculatePolygonPerimeter()" type="number" />
				<button onClick="removeSide('s${currentSides}');calculatePolygonPerimeter()" class="removeSide">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2000px-Red_X.svg.png" width="10" height="10" /></button>
			</div>
		</li>
    `);
};

function clearAll() {
	document.getElementById('listOfSides').innerHTML = "";
};

function removeSide ( side ) {
    var listOfSides = document.getElementById( 'listOfSides' );
    var sideToRemove = document.getElementById(side);
    listOfSides.removeChild(sideToRemove);
}

function calculatePolygonPerimeter() {
    var sumOfSides = 0.0;
    var _polygonPerimeterSides = document.getElementsByClassName('sideInput');
    var polygonPerimeterSides = [].map.call(_polygonPerimeterSides, function( input ) {
    	var value = parseFloat(input.value);
    	if (isNaN(value)) { value = 0; }
    	return value;
    });
    polygonPerimeterSides.forEach( function( side ) {
        sumOfSides += side;
    });
    document.getElementById('polygonPerimeterAnswer').innerHTML = sumOfSides;
}