


var setBubbles = function(data) {

var svg = d3.select('body').append('svg')
			.attr('width', 1000)
			.attr('height', 1000)
var ordinalColorScale = d3.scale.category20();
var circles = svg.selectAll('circle')
			.data(data.sort(function(a,b) { //sort data values
                        return +a.closed - +b.closed; 
                  }),
    		      function(d) { 
                        return d.closed; 
                  })
			.enter()
			.append('circle')
			.attr('opacity', 0.8)

circles.attr("cx", function(d, i) {
            return (i * 100) +50;
        })
       .attr("cy", function(d){
       		return d.closed +100;
       })
       .attr("r", function(d) {
            return d.closed * 5;
       })
       .style('fill', function(d, i){
		return ordinalColorScale(i);//uncomment line for ordinalScale colours
		//return linearColorScale(i)  //uncomment line for linearScale colours
	  })
       .text(function(d){
       	return d.user
       })
       .attr("stroke-width", 4)
       .style('stroke', function(d, i){
       		var col = $(this).css('fill');
       		var s = col.split(',');
       		frst = parseInt(s[0].substring(7,4)) -50;
       		var sec = parseInt(s[1].substring(1,4)) -50;
       		var thrd = parseInt(s[2].trim().split(')')) -50;
       		rgbStr = 'rgb('+frst+','+sec+','+ thrd+')';
       		return rgbStr;
	  })
}