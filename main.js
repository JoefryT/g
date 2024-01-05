song1 = "";
song2 = "";
scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    song1 = loadSound("Song1.mp3");
    song2 = loadSound("Song2.mp3");
    var songg = song1.isPlaying();
    console.log(songg);
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(vido,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+rightWristY);    
    }
}
function draw(){
    image(video, 0, 0 , 600 , 500); 
    
    fill("#FF0000");
    stroke("#FF0000");
    songg = song1;
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);

        song2.stop();
    }
    if(songg = false){
        song1.play();
        document.getElementById("e").innerHTML = "Sigma Phonk"
    }
}