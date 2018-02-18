#include "ofApp.h"

//Global Variables
float x = 0;
float y = 0;
int rad = 200;
int numDots = 1000;
float a = 1; //x freq
float b = 1; //y freq

//--------------------------------------------------------------
void ofApp::setup(){

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(0,0,0,150);
    //traslation to Screen center
    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    
    //drawing 100 dots to form a circle
    for (int i = 0; i < numDots; i++) {
        x = rad*cos(a*ofGetElapsedTimef()+i*2*PI/numDots);
        y = rad*sin(b*ofGetElapsedTimef()+i*2*PI/numDots);
        ofSetColor(255);
        ofDrawCircle(x, y, 1);
    }

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    if (key == OF_KEY_UP) {
        a++;
    }
    else if(key == OF_KEY_DOWN){
        a--;
    }
    else if(key == OF_KEY_RIGHT){
        b++;
    }
    else if(key == OF_KEY_LEFT){
        b--;
    }
        
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
