#include "ofApp.h"

int radius_circle = 200;
int radius_dots = 200;
int num_circles = 100;
int num_dots = 120;
float phi_circle;// = 2*PI/num_circles;
float phi_dots;// = 2*PI/num_dots;
float x,y;

//--------------------------------------------------------------
void ofApp::setup(){

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    radius_circle = ofMap(mouseX,0,ofGetWidth(),0,300);
    num_circles = ofMap(mouseY,0,ofGetHeight(),0,300);
    phi_circle = 2*PI/num_circles;
    phi_dots = 2*PI/num_dots;
    ofBackground(0);
    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    for (int  i = 0; i < num_circles; i++) {
        //x = radius_circle*cos(phi_circle * i);
        //y = radius_circle*sin(phi_circle * i);
        //ofSetColor(255,255,255,150);
        //ofDrawCircle(x, y, 2);
        for (int  j = 0; j < num_dots; j++) {
            ofPushMatrix();
            ofTranslate(radius_circle*cos(phi_circle * i), radius_circle*sin(phi_circle * i));
            ofRotate(5*ofGetElapsedTimef());
            //ofRotate(ofMap(mouseY,0,ofGetHeight(),0,10)*ofGetElapsedTimef());
            x = radius_dots*cos(phi_dots * j);
            y = radius_dots*sin(phi_dots * j);
            ofColor c = ofColor::fromHsb(ofMap(273,0,360,0,255), ofMap(90,0,100,0,255), ofMap(70,0,100,0,255),200);
            //ofColor c = ofColor::fromHsb(ofMap(j,0,num_dots,0,255), ofMap(88,0,100,0,255), ofMap(55,0,100,0,255),150);
            ofSetColor(c);
            ofDrawCircle(x, y, 2);
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
