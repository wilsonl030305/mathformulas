//Linked to Website.html, which is in the same directory.

var currentTab = 'Area';

function showArea() {
    //IMPORTANT: Will only open if area tab is already open. 
    if (currentTab !== 'area') /*Will only execute the code block if the tab is not already open */
    {
        document.getElementById('selectFormulaArea').innerHTML = `
    	<span class="spanOverThing">Area formula for:</span>
		<select name="Area Formula Choice" id="areaChoice" onchange="getAreaOption()">
			<option value="square">Square</option>
			<option value="parallelogram">Parallelogram/Rectangle</option>
			<option value="triangle">Triangle</option>
			<option value="circle">Circle</option>
		</select> 
		`;
        document.getElementById('formulaArea').innerHTML = `
		<span class="spanOverThing">Formula for Area of a Square:</span>
		<code><abbr title="Area = length of one side squared">A = s<sup>2</sup></abbr></code>
		`;
        document.getElementById('calculatorArea').innerHTML = `
		<span class="spanOverThing">Calculator</span>
		<br/>
		<code>Side = <input type="number" title="Square Area Input" id="squareAreaInput" onChange="calculateSquareArea()"/>
		</code>
		<br/>
		<code id="squareAreaAnswer"></code>
		`;

    }

    currentTab = 'area';
}
;function getAreaOption() {
    var optionChosen = document.getElementById('areaChoice').value;
    switch (optionChosen) {
    case 'square':
        {
            document.getElementById('formulaArea').innerHTML = `
			<span class="spanOverThing">Formula for Area of a Square:</span>
			<code><abbr title="Area = length of one side squared">A = s<sup>2</sup></abbr></code>
			`;
            document.getElementById('calculatorArea').innerHTML = `
			<span class="spanOverThing">Calculator</span>
			<br/>
			<code>Side = <input type="number" title="Square Area Input" id="squareAreaInput" onChange="calculateSquareArea()"/></code>
			<br/>
			<code id="squareAreaAnswer"></code>
			`;

        }
        break;
    case 'parallelogram':
        {
            document.getElementById('formulaArea').innerHTML = `
			<span class="spanOverThing">Formula For Area of a Square: </span>
			<code><abbr title="Area = Base length times Height">A = bh</abbr></code>
			`;
            document.getElementById('calculatorArea').innerHTML = `
			<span class="spanOverThing">Calculator</span>
			<br/>

			<code>
			Base = 
			<input type="number" id="parallelogramAreaInputBaseLength" title="Parallelogram Area Input - Base Length" onChange="calculateParallelogramArea()" />
			<br/>
			Height = 
			<input type="number" id="parallelogramAreaInputHeight" title="Parallelogram Area Input- Height" onChange="calculateParallelogramArea()" />
			</code>
			<br/>
			<code id="parallelogramAreaAnswer"></code>

			`;
        }
        break;
    case 'triangle':
        {
            document.getElementById('formulaArea').innerHTML = `
			<span class="spanOverThing">Formula for Area of a Triangle:</span>
			<code><abbr title="Area = Base length times Height divided by two">A = bh &divide 2</abbr></code>
			`;
            document.getElementById('calculatorArea').innerHTML = `
			<span class="spanOverThing">Calculator</span>
			<br/>

			<code>Base =
			<input type="number" id="triangleAreaHeight" title="Triangle Area Input - Height" onChange="calculateTriangleArea()" />
			<br/>
			Height =
			<input type="number" id="triangleAreaBaseLength" title="Triangle Area Input - Base Length" onChange="calculateTriangleArea()" /></code>

			<br/>

			<code id="triangleAreaAnswer"></code>
			`
        }
        break;
    case 'circle':
        {
            document.getElementById('formulaArea').innerHTML = `
            <span class="spanOverThing">Formula for Area of a Circle:</span>
            <code><abbr title="Area = Pi times Radius squared">A = &pi;r<sup>2</sup></abbr></code>
            `;
            document.getElementById('calculatorArea').innerHTML = `
			<span class="spanOverThing">Calculator</span>
			<br/>
			<code>Radius =
			<input type="number" id="circleAreaInput" title="Circle Area Input" onChange="calculateCircleArea()" />
			</code>
			<br/>
			<code id="circleAreaAnswer"></code>
            `
        }
        break;
        /*default:
            doesn't really matter, as default is above when you first click the button,
            and if I add it, it may cause debug issues later.
		*/
    }
};//For calculating areas of choices above

function calculateSquareArea() {
    var squareAreaInput = document.getElementById('squareAreaInput').value;
    var squareAreaAnswer = squareAreaInput ** 2;
    document.getElementById('squareAreaAnswer').innerHTML = squareAreaAnswer;
};
function calculateParallelogramArea() {
    var parallelogramAreaInputBaseLength = document.getElementById('parallelogramAreaInputBaseLength').value;
    var parallelogramAreaInputHeight = document.getElementById('parallelogramAreaInputHeight').value;
    var parallelogramAreaAnswer = parallelogramAreaInputBaseLength * parallelogramAreaInputHeight;
    document.getElementById('parallelogramAreaAnswer').innerHTML = parallelogramAreaAnswer;
};
function calculateTriangleArea() {
    var triangleAreaBaseLength = document.getElementById('triangleAreaBaseLength').value;
    var triangleAreaHeight = document.getElementById('triangleAreaHeight').value;
    var triangleAreaAnswer = triangleAreaBaseLength * triangleAreaHeight / 2;
    document.getElementById('triangleAreaAnswer').innerHTML = triangleAreaAnswer;
};
function calculateCircleArea() {
    var circleAreaInput = document.getElementById('circleAreaInput').value;
    document.getElementById('circleAreaAnswer').innerHTML = Math.PI * circleAreaInput ** 2;
};
/* Perimeter Tab
-----------------------------------------------------------------*/
function showPerimeter() {
    if (currentTab !== 'perimeter') {
        document.getElementById('selectFormulaArea').innerHTML = `
        <span class="spanOverThing">Perimeter formula for: </span>
        <select name="Perimeter Choice" id="perimeterChoice" onChange="getPerimeterOption()">
        	<option value="square">Square</option>
        	<option value="parallelogram">Rectangle/Parallelogram</option>
            <option value="circumference">Circumference</option>
            <option value="polygon">Any Polygon</option>
        </select>
    	`;
        document.getElementById('formulaArea').innerHTML = `
        <span class="spanOverThing">Formula for the Perimeter of a Square:</span>
        <code><abbr title="Area = 4 times the side length">A = 4s</abbr></code>
        `;
        document.getElementById('calculatorArea').innerHTML = `
		<span class="spanOverThing">Calculator</span>
		<br/>
		<code>Side =
		<input type="number" title="Square Perimeter Input" id="squarePerimeterInput" onChange="calculateSquarePerimeter()" />
		</code>
		<br/>
		<code id="squarePerimeterAnswer"></code>
        `;
    }
    currentTab = 'perimeter';
};

function getPerimeterOption() {
    var perimeterChoice = document.getElementById('perimeterChoice').value;
    switch (perimeterChoice) {
    case 'square':
        {
            document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Perimeter of a Square:</span>
				<code><abbr title="Perimeter = 4 times the side length">P = 4s</abbr></code>
				`;
            document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Side =
				<input type="number" title="Square Perimeter Input" id="squarePerimeterInput" onChange="calculateSquarePerimeter()" />
				</code>
				<br/>
				<code id="squarePerimeterAnswer"></code>
				`;
        }
        break;
    case 'parallelogram':
        {
            document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for Perimeter of a Parallelogram or Rectangle:</span>
				<code><abbr title="Area = 2 times the sum of the Length and Height">A = 2(l+h)</abbr></code>
				`;
            document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Length =
				<input title="Parallelogram Perimeter Input - Length" id="parallelogramPerimeterLengthInput" onChange="calculateParallelogramPerimeter()" />
				<br/>
				Height =
				<input title="Parallelogram Perimeter Input - Height" id="parallelogramPerimeterHeightInput" onChange="calculateParallelogramPerimeter()" />
				</code>
				<br/>
				<code id="parallelogramPerimeterAnswer"></code>
				`;
        }
        break;
    case 'circumference':
        {
            document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for Circumference of a Circle:</span>
				<code><abbr title="Perimeter = Pi times the Diameter">A = &pi;d</abbr></code>
				`;
            document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Radius =
				<input type="number" id="circumferenceInput" onChange="calculateCircumference()" title="Circumference Input" />
				</code>
				<br/>
				<code id="circumferenceAnswer"></code>
				`;
				
        }
        break;
    case 'polygon':
    	{
    		document.getElementById('formulaArea'),innerHTML = `
			<span class="spanOverThing">Formula for Perimeter of a Polygon:</span>
			<code><abbr title="Perimeter = all sides added together">P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub> + etc.</abbr></code>
    		`;
    		document.getElementById('calculatorArea').innerHTML = /*I use a iframe so that I can contain everything in one area.*/ `
			<div id="polygonApp">
				<iframe name="polygonPerimeterApp" src="PolygonPerimeterApp/PolygonPerimeterApp.html">
					<p>Your browser does not support iframes. Please switch to another browser or update your current one.</p>
				</iframe>
			</div>
    		`;
    	}
    	break;
    }
};
function calculateSquarePerimeter() {
    var squarePerimeterInput = document.getElementById('squarePerimeterInput').value;
    document.getElementById('squarePerimeterAnswer').innerHTML = squarePerimeterInput * 4;
};

function calculateParallelogramPerimeter() {
    var parallelogramPerimeterLengthInput = document.getElementById('parallelogramPerimeterLengthInput').value;
    var parallelogramPerimeterHeightInput = document.getElementById('parallelogramPerimeterHeightInput').value;
    document.getElementById('parallelogramPerimeterAnswer').innerHTML = 2 * (parallelogramPerimeterLengthInput + parallelogramPerimeterHeightInput);
};

function calculateCircumference() {
    var circumferenceInput = document.getElementById('circumferenceInput').value;
    document.getElementById('circumferenceAnswer').innerHTML = circumferenceInput * Math.PI;
};

//calculatePolygonPerimeter located in PolygonPerimeterAppScript.js

/* Volume tab
---------------------------------------------------*/

function showVolume() {
	if (currentTab !== 'volume') {
        document.getElementById('selectFormulaArea').innerHTML = `
        <span class="spanOverThing">Volume formula for: </span>
        <select name="Volume Choice" id="volumeChoice" onChange="getVolumeOption()">
        	<option value="cube">Cube</option>
        	<option value="rectangularPrism">Rectangular Prism</option>
            <option value="cone">Cone</option>
            <option value="cylinder">Cylinder</option>
            <option value="sphere">Sphere</option>
        </select>
    	`;
        document.getElementById('formulaArea').innerHTML = `
        <span class="spanOverThing">Formula for the Volume of a Cube:</span>
        <code><abbr title="Volume = one side length cubed">V = s<sup>3</sup></abbr></code>
        `;
        document.getElementById('calculatorArea').innerHTML = `
		<span class="spanOverThing">Calculator</span>
		<br/>
		<code>Side = 
		<input type="number" title="Cube Volume Input" id="cubeVolumeInput" onChange="calculateCubeVolume()" />
		</code>
		<br/>
		<code id="cubeVolumeAnswer"></code>
        `;
    }
    currentTab = 'volume';
};

function getVolumeOption() {
	var volumeChoice = document.getElementById('volumeChoice').value;
	switch(volumeChoice) {
		case 'cube':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Volume of a Cube:</span>
				<code><abbr title="Volume = one side length cubed">V = s<sup>3</sup></abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Side =
				<input type="number" title="Cube Volume Input" id="cubeVolumeInput" onChange="calculateCubeVolume()" />
				</code>
				<br/>
				<code id="cubeVolumeAnswer"></code>
				`;
			}
			break;
		case 'rectangularPrism':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Volume of a Rectangular Prism:</span>
				<code><abbr title="Volume = length times width times height">V = lwh</abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Length
				<input type="number" title="Rectangular Prism Volume Input - Length" id="rectangularPrismVolumeLength" onChange="calculateRectangularPrismVolume()" />
				<br/>
				Width =
				<input type="number" title="Rectangular Prism Volume Input - Width" id="rectangularPrismVolumeInputWidth" onChange="calculateRectangularPrismVolume()" />
				<br/>
				Height =
				<input type="number" title="Rectangular Prism Volume Input - Height" id="rectangularPrismVolumeInputHeight" onChange="calculateRectangularPrismVolume()" />
				</code>
				<br/>
				<code id="rectangularPrismVolumeAnswer"></code>
				`;
			}
			break;
		case 'cone':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Volume of a Cone:</span>
				<code><abbr title="Volume = pi times the radius of the base squared times the base height divided by three">V = &pi;r<sup>2</sup>&#8467; &divide 3</abbr></code>
				`;//&#8467; is cursive letter l for slope height
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Radius =
				<input type="number" title="Cone Volume Input - Radius" id="coneVolumeInputRadius" onChange="calculateConeVolume()" />
				<br/>
				Slant Height =
				<input type="number" title="Cone Volume Input - Slant Height" id="coneVolumeInputSlantHeight" onChange="calculateConeVolume()" />				
				</code>
				<br/>
				<code id="coneVolumeAnswer"></code>
				`;
			}
			break;
		case 'cylinder':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Volume of a Cylinder:</span>
				<code><abbr title="Volume = pi times the radius of the base squared times the height">V = &pi;r<sup>2</sup>&#8467;</abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Radius =
				<input type="number" title="Cylinder Volume Input - Radius" id="cylinderVolumeInputRadius" onChange="calculateCylinderVolume()" />
				<br/>
				Height =
				<input type="number" title="Cylinder Volume Input - Height" id="cylinderVolumeInputHeight" onChange="calculateCylinderVolume()" />				
				</code>
				<br/>
				<code id="cylinderVolumeAnswer"></code>
				`;
			}
			break;
		case 'sphere':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Volume of a Cone:</span>
				<code><abbr title="Volume = 4/3 times pi times the radius cubed ">V = 4/3&pi;r<sup>3</sup></abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Radius =
				<input type="number" title="Sphere Volume Input" id="sphereVolumeInput" onChange="calculateSphereVolume()" />
				</code>
				<br/>
				<code id="sphereVolumeAnswer"></code>
				`;
			}
			break;
	}
};

function calculateCubeVolume() {
	var cubeVolumeInput = document.getElementById('cubeVolumeInput').value;
	document.getElementById('cubeVolumeAnswer').innerHTML = cubeVolumeInput ** 3;
};

function calculateRectangularPrismVolume() {
	var rectangularPrismVolumeLength = document.getElementById('rectangularPrismVolumeLength').value;
	var rectangularPrismVolumeInputWidth = document.getElementById('rectangularPrismVolumeInputWidth').value;
	var rectangularPrismVolumeInputHeight = document.getElementById('rectangularPrismVolumeInputHeight').value;
	document.getElementById('rectangularPrismVolumeAnswer').innerHTML = rectangularPrismVolumeLength * rectangularPrismVolumeInputWidth * rectangularPrismVolumeInputHeight;
};

function calculateConeVolume() {
	var coneVolumeInputRadius = document.getElementById('coneVolumeInputRadius').value;
	var coneVolumeInputSlantHeight = document.getElementById('coneVolumeInputSlantHeight').value;
	document.getElementById('coneVolumeAnswer').innerHTML = Math.PI * coneVolumeInputRadius ** 2 * coneVolumeInputSlantHeight / 3;
};

function calculateCylinderVolume() {
	var cylinderVolumeInputRadius = document.getElementById('cylinderVolumeInputRadius').value;
	var cylinderVolumeInputHeight = document.getElementById('cylinderVolumeInputHeight').value;
	document.getElementById('cylinderVolumeAnswer').innerHTML = Math.PI * cylinderVolumeInputRadius ** 2 * cylinderVolumeInputHeight;
}

function calculateSphereVolume() {
	var sphereVolumeInput = document.getElementById('sphereVolumeInput').value;
	document.getElementById('sphereVolumeAnswer').innerHTML = 4/3 * Math.PI * sphereVolumeInput ** 3;
};

/*Surface area Formulas
--------------------------------------------------------------------------*/

function showSurfaceArea() {
	if (currentTab !== 'surfaceArea') {
        document.getElementById('selectFormulaArea').innerHTML = `
        <span class="spanOverThing">Surface Area formula for: </span>
        <select name="Surface Area Choice" id="surfaceAreaChoice" onChange="getSurfaceAreaOption()">
        	<option value="cube">Cube</option>
        	<option value="rectangularPrism">Rectangular Prism</option>
            <option value="cone">Cone</option>
            <option value="cylinder">Cylinder</option>
            <option value="sphere">Sphere</option>
        </select>
    	`;
        document.getElementById('formulaArea').innerHTML = `
        <span class="spanOverThing">Formula for the Surface Area of a Cube:</span>
        <code><abbr title="Surface Area = six times one side length squared">S.A. = 6s<sup>2</sup></abbr></code>
        `;
        document.getElementById('calculatorArea').innerHTML = `
		<span class="spanOverThing">Calculator</span>
		<br/>
		<code>Side =
		<input type="number" title="Cube Surface Area Input" id="cubeSurfaceAreaInput" onChange="calculateCubeSurfaceArea()" />
		</code>
		<br/>
		<code id="cubeSurfaceAreaAnswer"></code>
        `;
    }
    currentTab = 'surfaceArea';
}

function getSurfaceAreaOption() {
	var surfaceAreaChoice = document.getElementById('surfaceAreaChoice').value;
	switch(surfaceAreaChoice){
		case 'cube':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Surface Area of a Cube:</span>
				<code><abbr title="Surface Area = six times one side length squared">S.A. = 6s<sup>2</sup></abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Side =
				<input type="number" title="Cube Surface Area Input" id="cubeSurfaceAreaInput" onChange="calculateCubeSurfaceArea()" />
				</code>
				<br/>
				<code id="cubeSurfaceAreaAnswer"></code>
				`;
			}
			break;
		case 'rectangularPrism':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Surface Area of a Rectangular Prism:</span>
				<code><abbr title="Surface Area = 2 times the sum of ( length times width plus width times height plus height times length )">
				S.A. = 2(lw + wh + hl)</abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>
				Length = 
				<input type="number" title="Rectangular Prism Surface Area Input - Length" id="rectangularPrismSurfaceAreaInputLength" onChange="calculateRectangularPrismSurfaceArea()">
				<br/>
				Width = 
				<input type="number" title="Rectangular Prism Surface Area Input - Width" id="rectangularPrismSurfaceAreaInputWidth" onChange="calculateRectangularPrismSurfaceArea()">
				<br/>
				Height =
				<input type="number" title="Rectangular Prism Surface Area Input - Height" id="rectangularPrismSurfaceAreaInputHeight" onChange="calculateRectangularPrismSurfaceArea()">
				</code>
				<br/>
				<code id="rectangularPrismSurfaceAreaAnswer"></code>
				`;
			}
			break;
		case 'cone':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Surface Area of a Cone:</span>
				<code><abbr title="Surface Area = pi times the radius squared plus pi times the radius times the slope height">
				S.A. = &pi;r<sup>2</sup>+&pi;r&#8467;</abbr></code>
				`;//&#8467; is cursive l for slant height
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>
					Radius = 
					<input type="number" title="Cone Surface Area Input - Radius" id="coneSurfaceAreaInputRadius" onChange="calculateConeSurfaceArea()" />
					<br/>
					Slant Height = 
					<input type="number" title="Cone Surface Area Input - Slant Height" id="coneSurfaceAreaInputSlantHeight" onChange="calculateConeSurfaceArea()" />
				</code>
				<br/>
				<code id="coneSurfaceAreaAnswer"></code>
				`;
			}
			break;
		case 'cylinder':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Surface Area of a Cylinder:</span>
				<code><abbr title="Surface Area = 2 times pi times the radius squared plus w times pi times the radius times the height">
				S.A. = 2&pi;r<sup>2</sup>+2&pi;rh;</abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>
					Radius = 
					<input type="number" title="Cylinder Surface Area Input - Radius" id="cylinderSurfaceAreaInputRadius" onChange="calculateCylinderSurfaceArea()" />
					<br/>
					Height = 
					<input type="number" title="Cylinder Surface Area Input - Height" id="cylinderSurfaceAreaInputHeight" onChange="calculateCylinderSurfaceArea()" />
				</code>
				<br/>
				<code id="cylinderSurfaceAreaAnswer"></code>
				`;
			}
			break;
		case 'sphere':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">Formula for the Surface Area of a Sphere:</span>
				<code><abbr title="Surface Area = 4 times pi times the radius squared">S.A. = 4&pi;r<sup>2</sup></abbr></code>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>Radius =
				<input type="number" title="Sphere Surface Area Input" id="sphereSurfaceAreaInput" onChange="calculateSphereSurfaceArea()"/>
				<br/>
				<code id="sphereSurfaceAreaAnswer"></code>
				`;
			}
			break;
		//No default
	}
};

function calculateCubeSurfaceArea() {
	var cubeSurfaceAreaInput = document.getElementById('cubeSurfaceAreaInput').value;
	document.getElementById('cubeSurfaceAreaAnswer').innerHTML = 6 * cubeSurfaceAreaInput ** 2;
};

function calculateRectangularPrismSurfaceArea() {
	var rectangularPrismSurfaceAreaInputLength = document.getElementById('rectangularPrismSurfaceAreaInputLength').value;
	var rectangularPrismSurfaceAreaInputWidth = document.getElementById('rectangularPrismSurfaceAreaInputWidth').value;
	var rectangularPrismSurfaceAreaInputHeight = document.getElementById('rectangularPrismSurfaceAreaInputHeight').value;
	document.getElementById('rectangularPrismSurfaceAreaAnswer').innerHTML = 2 * ( rectangularPrismSurfaceAreaInputLength * rectangularPrismSurfaceAreaInputWidth + rectangularPrismSurfaceAreaInputWidth * rectangularPrismSurfaceAreaInputHeight + rectangularPrismSurfaceAreaInputHeight * rectangularPrismSurfaceAreaInputLength );	
	
	
};

function calculateConeSurfaceArea() {
	var coneSurfaceAreaInputRadius = document.getElementById('coneSurfaceAreaInputRadius').value;
	var coneSurfaceAreaInputSlantHeight = document.getElementById('coneSurfaceAreaInputSlantHeight').value;
	document.getElementById('coneSurfaceAreaAnswer').innerHTML = Math.PI * coneSurfaceAreaInputRadius ** 2 + Math.PI * coneSurfaceAreaInputRadius * coneSurfaceAreaInputSlantHeight;
};

function calculateCylinderSurfaceArea() {
	var cylinderSurfaceAreaInputRadius = document.getElementById('cylinderSurfaceAreaInputRadius').value;
	var cylinderSurfaceAreaInputHeight = document.getElementById('cylinderSurfaceAreaInputHeight').value;
	document.getElementById('cylinderSurfaceAreaAnswer').innerHTML = 2 * Math.PI * cylinderSurfaceAreaInputRadius ** 2 + 2 * Math.PI * cylinderSurfaceAreaInputRadius * cylinderSurfaceAreaInputHeight;
}

function calculateSphereSurfaceArea() {
	var sphereSurfaceAreaInput = document.getElementById('sphereSurfaceAreaInput').value;
	document.getElementById('sphereSurfaceAreaAnswer').innerHTML = 4 * Math.PI * sphereSurfaceAreaInput ** 2;
};

/*Misc formulas
-------------------------------------------------------------------------------------*/

function showMisc() {
	if (currentTab !== 'misc') {
		document.getElementById('selectFormulaArea').innerHTML = `
		<span class="spanOverThing">Formula for:</span>
		<br/>
		<select title="Misc Formula Choice" id="miscFormulaChoice" onchange="getMiscOption()">
			<option value="pythagoreanTheorem">Pythagorean Theorem</option>
			<option value="quadraticEquation">Quadratic Equation</option>
		</select>
		`;
		document.getElementById('formulaArea').innerHTML = `
		<span class="spanOverThing">The Pythagorean Theorem:</span>\
		<code><abbr title="a squared plus b squared = c squared">a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></abbr></code>
		<br/>
		<br/>
		<p class="explain">
			The Pythagorean Theorem states that the side lengths of a right triangle that are perpendicular (a & b),
			when their squares are added up, are equal to the square of the third side (c), called the hypotenuse.
		</p>
		`;
		document.getElementById('calculatorArea').innerHTML = `
		<span class="spanOverThing">Calculator</span>
		<br/>
		<span>Solving for:</span>
		<select title="Solving for:" id="pythagoreanTheoremChoice" onChange="getPythagoreanTheoremOption()">
			<option value="a">a</option>
			<option value="b">b</option>
			<option value="c">c</option>
		</select>
		<br/>
		<div id="pythagoreanTheoremCalculator">
			<code>
			b =
			<input type="number" title="Pythagorean Theorem Input - b" id="pythagoreanTheoremInputB" onChange="calculatePythagoreanTheorem('a')" />
			<br/>
			c =
			<input type="number" title="Pythagorean Theorem Input - c" id="pythagoreanTheoremInputC" onChange="calculatePythagoreanTheorem('a')" />
			</code>
			<br/>
			<code id="pythagoreanTheoremAnswer"></code>
		</div>
		`;
		currentTab = 'misc';
	}
};

function getMiscOption() {
	var miscFormulaChoice = document.getElementById('miscFormulaChoice').value;
	switch(miscFormulaChoice) {
		case 'pythagoreanTheorem':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">The Pythagorean Theorem:</span>
				<code><abbr title="a squared plus b squared = c squared">a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></abbr></code>
				<br/>
				<br/>
				<p class="explain">
					The Pythagorean Theorem states that the side lengths of a right triangle that are perpendicular (a & b),
					when their squares are added up, are equal to the square of the third side (c), called the hypotenuse.
				</p>
				`;
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<span>Solving for:</span>
				<select title="Solving for:" id="pythagoreanTheoremChoice" onChange="getPythagoreanTheoremOption()">
					<option value="a">a</option>
					<option value="b">b</option>
					<option value="c">c</option>
				</select>
				<br/>
				<div id="pythagoreanTheoremCalculator">
					<code>
					b =
					<input type="number" title="Pythagorean Theorem Input - b" id="pythagoreanTheoremInputB" onChange="calculatePythagoreanTheorem('a')" />
					<br/>
					c =
					<input type="number" title="Pythagorean Theorem Input - c" id="pythagoreanTheoremInputC" onChange="calculatePythagoreanTheorem('a')" />
					<sup>2</sup></code>
					<br/>
					<code id="pythagoreanTheoremAnswer"></code>
				</div>
				`;
			}
			break;
		case 'quadraticEquation':
			{
				document.getElementById('formulaArea').innerHTML = `
				<span class="spanOverThing">The Quadratic Equation:</span>
				<code>X = -b &#8723;&radic;<code class="lineOver">b<sup>2</sup> - 4ac</code> &divide 2a</code>
				<p class="explain">
					The Quadratic Equation is used with parabolas and parabolical funtions (exponential growth)
				</p>
				`; //&#8723 is +/- sign, &radic; is square root sign.
				
				document.getElementById('calculatorArea').innerHTML = `
				<span class="spanOverThing">Calculator</span>
				<br/>
				<code>
					a =	<input type="number" title="Quadratic Equation Input - a" id="quadraticEquationInputA" onChange="calculateQuadraticEquation()" />
					<br/>
					b = <input type="number" title="Quadratic Equation Input - b" id="quadraticEquationInputB" onChange="calculateQuadraticEquation()" />
					<br/>
					c =	<input type="number" title="Quadratic Equation Input - c" id="quadraticEquationInputC" onChange="calculateQuadraticEquation()" />
				</code>
				<br/>
				<code id="quadraticEquationAnswer"></code>
				`;
			}
	}
}

function getPythagoreanTheoremOption() {
	var pythagoreanTheoremChoice = document.getElementById('pythagoreanTheoremChoice').value;
	switch(pythagoreanTheoremChoice) {
		case 'a':
			{
				document.getElementById('pythagoreanTheoremCalculator').innerHTML = `
				<code>
				b =
				<input type="number" title="Pythagorean Theorem Input - b" id="pythagoreanTheoremInputB" onChange="calculatePythagoreanTheorem('a')" />
				<br/>
				c =
				<input type="number" title="Pythagorean Theorem Input - c" id="pythagoreanTheoremInputC" onChange="calculatePythagoreanTheorem('a')" />
				<sup>2</sup></code>
				<br/>
				<code id="pythagoreanTheoremAnswer"></code>
				`;
			}
			break;
		case 'b':
			{
				document.getElementById('pythagoreanTheoremCalculator').innerHTML = `
				<code>
				a =
				<input type="number" title="Pythagorean Theorem Input - a" id="pythagoreanTheoremInputA" onChange="calculatePythagoreanTheorem('b')" />
				<br/>
				c =
				<input type="number" title="Pythagorean Theorem Input - c" id="pythagoreanTheoremInputC" onChange="calculatePythagoreanTheorem('b')" /></code>
				<br/>
				<code id="pythagoreanTheoremAnswer"></code>
				`;
			}
			break;
		case 'c':
			{
				document.getElementById('pythagoreanTheoremCalculator').innerHTML = `
				<code>
				a =
				<input type="number" title="Pythagorean Theorem Input - a" id="pythagoreanTheoremInputA" onChange="calculatePythagoreanTheorem('c')" />
				<br/>
				b =
				<input type="number" title="Pythagorean Theorem Input - b" id="pythagoreanTheoremInputB" onChange="calculatePythagoreanTheorem('c')" />
				</code>
				<br/>
				<code id="pythagoreanTheoremAnswer"></code>
				`;
			}
	}
	
};

function calculatePythagoreanTheorem( objective ) {
	switch(objective) {
		case 'a':
			{
				var pythagoreanTheoremInputB = document.getElementById('pythagoreanTheoremInputB').value;
				var pythagoreanTheoremInputC = document.getElementById('pythagoreanTheoremInputC').value;
				var pythagoreanTheoremAnswer = Math.sqrt( pythagoreanTheoremInputB ** 2 - pythagoreanTheoremInputC ** 2 );
				if ( !(isNaN(pythagoreanTheoremAnswer)) ) {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = pythagoreanTheoremAnswer;
				} else {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = "Enter valid data.";
				}
			}
			break;
		case 'b':
			{
				var pythagoreanTheoremInputA = document.getElementById('pythagoreanTheoremInputA').value;
				var pythagoreanTheoremInputC = document.getElementById('pythagoreanTheoremInputC').value;
				var pythagoreanTheoremAnswer = Math.sqrt( pythagoreanTheoremInputA ** 2 - pythagoreanTheoremInputC ** 2 );
				if ( !(isNaN(pythagoreanTheoremAnswer)) ) {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = pythagoreanTheoremAnswer;
				} else {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = "Enter valid data.";
				}
			}
			break;
		case 'c':
			{
				var pythagoreanTheoremInputA = document.getElementById('pythagoreanTheoremInputA').value;
				var pythagoreanTheoremInputB = document.getElementById('pythagoreanTheoremInputB').value;
				var pythagoreanTheoremAnswer = Math.sqrt( pythagoreanTheoremInputA ** 2 + pythagoreanTheoremInputB ** 2 );
				if ( !(isNaN(pythagoreanTheoremAnswer)) ) {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = pythagoreanTheoremAnswer;
				} else {
					document.getElementById('pythagoreanTheoremAnswer').innerHTML = "Enter valid data.";
				}
			}
	}
};

function calculateQuadraticEquation() {
	var quadraticEquationInputA = document.getElementById('quadraticEquationInputA').value;
	var quadraticEquationInputB = document.getElementById('quadraticEquationInputB').value;
	var quadraticEquationInputC = document.getElementById('quadraticEquationInputC').value;
	var quadraticEquationAnswer = ((quadraticEquationInputB - 2 * quadraticEquationInputB) + Math.sqrt(quadraticEquationInputB ** 2 - 4 * quadraticEquationInputA * quadraticEquationInputC))/2*quadraticEquationInputA;
	if (!(isNaN(quadraticEquationAnswer))) {
		document.getElementById('quadraticEquationAnswer').innerHTML = quadraticEquationAnswer;
	} else {
		document.getElementById('quadraticEquationAnswer').innerHTML = "Enter valid data.";
	}
}