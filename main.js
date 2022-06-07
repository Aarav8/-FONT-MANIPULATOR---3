noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup() 
{
    canvas=createCanvas(450,450);
    canvas.position(800,200);

    video=createCapture(VIDEO);
    video.position(150,150);
    video.size(550,550);

    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);

        document.getElementById("side_of_the_square").innerHTML="Side of the Text = "+difference+"px";
    }
}
function draw()
{
    background("#808080");
    fill("#fc0328");
    textSize(difference);
    text("aditya",noseX,noseY);
}
