function stringChop(str, size) {
  // your code here
	if (!str) {
		return [];
	}
	const chunk=[];
	if(let i=0;i<str.length;i=i+size){
		chunk.push(str.slice(i,i+size));
	}
	return chunk;
}

//Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
