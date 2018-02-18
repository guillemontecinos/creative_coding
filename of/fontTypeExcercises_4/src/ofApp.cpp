#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    font.load("helvetica.otf", 200, true, true, true);
    vector <ofPath> characters =  font.getStringAsPoints("hola");
    for(int i = 0; i < characters.size(); i++){
        ofMesh m = characters[i].getTessellation();
        letterMesh.push_back(m);
    }

}

//--------------------------------------------------------------
void ofApp::update(){
    letterMeshCopy.clear();
    for(int i = 0; i < letterMesh.size(); i++){
        ofMesh m = letterMesh[i];

        for (int j = 0; j < m.getVertices().size(); j++) {
            m.getVertices()[j].x += ofRandom(ofMap(abs(mouseX),0,ofGetWidth(),1,10),ofMap(abs(mouseX),0,ofGetWidth(),1,-50));
            m.getVertices()[j].y += ofRandom(ofMap(abs(mouseY),0,ofGetHeight(),1,10),ofMap(abs(mouseY),0,ofGetHeight(),1,-50));
        }
        
        letterMeshCopy.push_back(m);
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    // ofPolyline ;
    
    ofBackground(0);
    
    
    vector < ofPolyline > lines;
    vector < ofPolyline > auxLines;
//    vector <ofPath> characters =  font.getStringAsPoints("hello");
    
//    for (int i = 0; i < characters.size(); i++){
//        for (int j = 0; j < characters[i].getOutline().size(); j++){
//            ofPolyline temp = characters[i].getOutline()[j];
//            temp = temp.getResampledBySpacing(ofMap(abs(mouseX),0,ofGetWidth(),1,200));
//            lines.push_back(temp);
//        }
//    }

    ofTranslate(100,ofGetHeight()/2+200);

    ofSetColor(255);
    for(int i = 0; i < letterMeshCopy.size(); i++){
        letterMeshCopy[i].draw();
    }

//    vector <ofPoint> puntos;
//
//    for (int i = 0; i < lines.size(); i++){
//        for (int j = 0; j < lines[i].size(); j++){
////            lines[i][j].x += ofRandom(-6,6);
////            lines[i][j].y += ofRandom(-6,6);
//              lines[i][j].x += ofRandom(ofMap(abs(mouseX),0,ofGetWidth(),1,10),ofMap(abs(mouseX),0,ofGetWidth(),1,-50));
//              lines[i][j].y += ofRandom(ofMap(abs(mouseY),0,ofGetHeight(),1,10),ofMap(abs(mouseY),0,ofGetHeight(),1,-50));
//        }
//        ofSetLineWidth(3);
//        lines[i].draw();
//    }

//================================================
//For painting inner space of shapes use
//
//================================================
    
//Esta parte la hizo el guille pero no funciona ========
//    for (int i = 0; i < puntos.size(); i++) {
//        for (int j = 0; puntos[i].size(); j++) {
//            int j_p_1 = (i+1) % puntos[i].size();
//            ofPoint b = puntos[j_p_1];
//            ofDrawLine(puntos[i][j],b);
//        }
//    }
//Esta parte la hizo el guille pero no funciona ========
    
    
//        ofTranslate(300,300);
//
//        ofPoint center;
//        int count = 0;
//        for (int i = 0; i < lines.size(); i++){
//            for (int j = 0; j < lines[i].size(); j++){
//                center += lines[i][j];
//                count++;
//            }
//        }
//
//        center /= (float) count;
//        for (int i = 0; i < lines.size(); i++){
//            for (int j = 0; j < lines[i].size(); j++){
//                lines[i][j] -= center;
//            }
//        }
//
//        ofRotateY(ofGetElapsedTimef()*50);
//
//        for (int i = 0; i < lines.size(); i++){
//
//
//            for (int j = 0; j < lines[i].size(); j++){
//
//                float y = lines[i][j].x;
//
//                ofMatrix4x4 mat;
//                mat.makeRotationMatrix(ofGetElapsedTimef()*50 + sin(y*0.01 + ofGetElapsedTimef())*mouseX, ofPoint(0,1,0));
//
//                lines[i][j] = mat * lines[i][j];
//            }
//
//            lines[i].draw();
//        }
    
//    ofTranslate(300,300);
//
//    for (int i = 0; i < lines.size(); i++){
//        //lines[i].draw();
//        for (int j = 0; j < lines[i].size(); j++){
//
//            //ofLine(lines[i][j], lines[i][j] + ofPoint(mouseX,mouseY));
//
//            ofPoint a = lines[i][j] + ofPoint(mouseX,mouseY).getNormalized() * 0.1;
//            ofPoint b = lines[i][j] + ofPoint(mouseX,mouseY);
//
//            for (int k = 0; k < lines.size(); k++){
//                for (int l = 0; l < lines[k].size(); l++){
//                    ofPoint c = lines[k][l];
//                    ofPoint d = lines[k][(l+1) % lines[k].size()];
//
//                    ofPoint intersection;
//                    if (ofLineSegmentIntersection(a, b, c, d, intersection)){
//                        b = intersection;
//                    }
//                }
//            }
//
//            ofLine(a,b);
    
            
            
            //int j_p_1 = (j+1) % lines[i].size();
            //ofPoint a = lines[i][j];
            //ofPoint b = lines[i][j_p_1];
            //ofPoint diff = b - a;
            //diff = diff.getNormalized();
            //diff.rotate(90, ofPoint(0, 0, 1));
            //ofLine(a, a + diff * 10);
//        }
        
//    }
    
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
