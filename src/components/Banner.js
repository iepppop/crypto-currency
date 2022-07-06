import styled from 'styled-components'
import * as THREE from 'three'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'


function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/spacein.glb')
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
        group.current.rotation.y = Math.sin(t / 4) / 8
        group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 40
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[20, -40, 0]} rotation={[-Math.PI / 1, 40, 0]} scale={1}>
                <group position={[-20.19, 14, 83.44]} rotation={[-10, -10, 1.08]} scale={0.14}>
                    <mesh geometry={nodes.Addons_3.geometry} material={materials['Addons 3']} position={[0, -80.03, 310.97]} scale={1.92} />
                    <mesh geometry={nodes.Addons_2.geometry} material={materials['Addons 2']} position={[0, -22.51, 107.85]} scale={1.92} />
                    <mesh geometry={nodes.Addons_1.geometry} material={materials['Addons 1']} position={[0, -44.16, 188.11]} scale={1.92} />
                    <mesh geometry={nodes.Visor.geometry} material={materials.Visor} position={[0, -85.75, 312.98]} scale={1.92} />
                    <mesh geometry={nodes.Helmet.geometry} material={materials.Helmet} position={[0, -6.22, 292.37]} scale={1.92} />
                    <mesh geometry={nodes._switchable.geometry} material={materials._switchable} position={[0, -77.14, 88.43]} scale={1.92} />
                </group>
            </group>
            <group position={[0.15, 0.03, -0]} rotation={[-Math.PI / 5, 10, 0]} scale={0.4}>
                <group position={[1.41, 0, 100]}>
                    <mesh geometry={nodes.Window.geometry} material={materials.Window} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Bottom.geometry} material={materials.Bottom} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Wings.geometry} material={materials.Wings} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Top.geometry} material={materials.Top} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Metalic_rim.geometry} material={materials['Metalic rim']} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Body.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                    <mesh geometry={nodes.Flames.geometry} material={materials.Flames} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
                </group>
            </group>
            <group position={[0, 2, 0]} rotation={[-Math.PI / 2, 20, 0]} scale={1.4}>
                <mesh geometry={nodes.Moon_1.geometry} material={materials['Moon ']} position={[0, 0, -0.53]} />
            </group>
        </group>
    )
}

const Banner = () => {
    return (
        <Contain>
            <Container>
                <Text>
                    <h5>OPEN</h5>
                    <span>
                        Today's
                        <p>CrytopCurrency
                        </p>
                        <p>Prices
                        </p>
                    </span>
                    <Sub>
                    The World's Largest Cryptocurrency Market
                    <p>A secure system provides a fast and convenient trading experience.</p>
                    </Sub>
                </Text>
            </Container>
      
                <BackCurly style={{ width: "300px", height: "300px", right: "-200px", top: "10px" }} />
                <BackCurly style={{ width: "460px", height: "460px", right: "200px", top: "100px" }} />
       
            <ThreeWrap>
                <Suspense fallback={null}>
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 12 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 6, 0]}
                            polar={[0, Math.PI / 2]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                            <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, -0.5]} scale={0.002} />
                        </PresentationControls>
                        <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                        <Environment preset="city" />
                    </Canvas>
                </Suspense>
            </ThreeWrap>
        </Contain>
    )
}

export default Banner;


const Contain = styled.div`
    max-width:100%;
    height:500px;
    background-color #222126;
    margin:0 auto;
    padding:0 30px;
`

const Container = styled.div`
    max-width:1000px;
    margin:0 auto;
    height:100%;
    position:relative;
    z-index:2;
`

const Text = styled.div`
    position:absolute;
    top:0;
    left:0;
    color:#fff;
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    font-size:50px;
    width:500px;
    padding:80px 0 0 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

    h5{
        font-size:14px;
        margin:0 0 20px 0;
        display:inline-block;
        background:#734b6d;
        padding:12px 25px;
        border-radius:50px;
    }

    p{  
        display:inline-block;
        letter-spacing:2px;
    }

    span{
        display:block;
    }
`

const BackCurly = styled.div`
    position:absolute;
    border-radius:50%;
    background: linear-gradient(to right, #42275a, #734b6d);
    filter: blur(50px);
    opacity:0.5;
`

const BackWrap = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;

`

const ThreeWrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    right:0;
    top:-100px;
    z-index:4;
`

const Sub = styled.div`
    font-size:10px;
    font-weight:400;
    margin:20px 0 0 0;
    letter-spacing:1px;
    opacity:0.8;

    p{
        letter-spacing:1px;
    }
`
