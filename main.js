song="";

leftWristX=0;
leftWristY=0;

righttWristX=0;
righttWristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoade(){
    console.log('poseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#800000");
    stroke("#800000");

    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume = " + volume;
    son.setVolume(volume);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("righttWristX = " + rightWristX + "righttWristY = " + rightWristY);
}
}