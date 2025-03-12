import { useGLTF } from "@react-three/drei"
import { forwardRef, useMemo } from "react"
import { type Group } from "three"

// eslint-disable-line
export const Car = forwardRef<Group>(function InnerCar(props, ref) {
  const { nodes } = useGLTF("/low_poly_car_muscle_car_2.glb")

  const scene = useMemo(() => {
    nodes.Sketchfab_model.traverse((child) => {
      if (child.position.x > 0) {
        child.position.x -= 365
      }
    })

    return nodes.RootNode
  }, [nodes])

  return (
    <group ref={ref} {...props}>
      <group scale={[0.02, 0.02, 0.02]} rotation={[0, Math.PI, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  )
})

Car.displayName = "Car"
