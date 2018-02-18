#include "ofApp.h"
float x, y;
int inRad = 80;
int midRad = 2*inRad;
int extRad = 2 * midRad;
int numLines = 16;
float phiLines = 2*PI/numLines; //Span between lines centre

//--------------------------------------------------------------
void ofApp::setup(){
    img.load("image.png");
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(0);
    //ofSetColor(255,100,100,150);
    //Translation to the center
    ofPoint center = ofPoint(ofGetWidth()/2, ofGetHeight()/2);
    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    for (int  i = 0; i < numLines; i++) {
        //x = midRad*cos(i * phiLines);
        //y = midRad*sin(i * phiLines);
        
        x = ofMap(sin(ofGetElapsedTimef()),-1,1,inRad,midRad)*cos(i * phiLines);
        y = ofMap(sin(ofGetElapsedTimef()),-1,1,inRad,midRad)*sin(i * phiLines);
        
        //x = ofMap(sin(ofMap(ofGetMouseX(),0,ofGetHeight(),1,0)*ofGetElapsedTimef()),-1,1,inRad,midRad)*cos(i //* phiLines);
        //y = ofMap(sin(ofMap(ofGetMouseX(),0,ofGetHeight(),1,0)*ofGetElapsedTimef()),-1,1,inRad,midRad)*sin(i * phiLines);
        
        //New reference matrix
        ofPushMatrix();
        ofTranslate(x,y);
        ofRotate(360 * ofGetElapsedTimef() * .25 + ofMap(i*phiLines,0,2*PI,0,360));
        //ofRotate(360 * ofGetElapsedTimef() * ofMap(ofGetMouseY(),0,ofGetHeight(),1,0) + ofMap(i*phiLines,0,2*PI,0,360));
        //ofPoint a = ofPoint(-midRad,0);
        //ofPoint b = ofPoint(midRad,0);
        //ofDrawLine(a,b);
        
        //For loop for define and draw dots
        for (int j = -7; j < 7; j++) {
            ofPoint a = ofPoint(2*midRad/14*j,0);
            //ofMap(ofDist(a.x,a.y,0,0),0,360,0,255);
            //ofSetColor(ofMap(ofDist(a.x,a.y,center.x,center.y),0,360,0,255),100,100,150);
            ofSetColor(255,100,100,255);
            img.draw(a, 100, 100);
            //ofDrawCircle(a, 4);
            
        }
        
        ofPopMatrix();
        //close reference matrix
        
        //ofDrawCircle(x, y, 10);
        
    }
    
    /*
    ofPushMatrix();
    ofPopMatrix();
    */
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
