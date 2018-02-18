#include "ofApp.h"
string myString = "a";
int pixPix = 8;

//--------------------------------------------------------------
void ofApp::setup(){
//    image.load("sofi2.jpg");
    image.load("sofi2.jpg");
    font.load("helvetica.otf",(int) pixPix*.9);
}

//--------------------------------------------------------------
void ofApp::update(){
    ofSeedRandom(0);
}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(0);
    ofRectangle rect = font.getStringBoundingBox(myString, 0, 0);
    unsigned char * data = image.getPixels().getData();
    for (int i = 0; i < image.getWidth(); i += pixPix) {
        for (int j = 0; j < image.getHeight(); j += pixPix) {
            //getting pixels data
            int index = (j * image.getWidth() + i) * 3;
            int red =   data[index];
            int green = data[index + 1];
            int blue =  data[index + 2];
            //setting random char
            myString = "";
            myString = ('a' + ofRandom((int)ofMap(mouseY,0,ofGetHeight(),0,30)));
            //drawing chars with symbol and color selected
            ofSetColor(red, green, blue);
            ofPushMatrix();
                ofTranslate(i,j);
                font.drawString(myString,0,rect.getHeight());
            ofPopMatrix();
        }
    }
}


//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
