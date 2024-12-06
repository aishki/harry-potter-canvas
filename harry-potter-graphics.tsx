"use client"

import React, { useEffect, useRef } from 'react'

const HarryPotterGraphics: React.FC = () => {
  const canvasRefs = [
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
  ]

  useEffect(() => {
    canvasRefs.forEach((canvasRef, index) => {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          switch (index) {
            case 0:
              drawHarryPotter(ctx)
              break
            case 1:
              drawHogwartsCastle(ctx)
              break
            case 2:
              drawGoldenSnitch(ctx)
              break
            case 3:
              drawSortingHat(ctx)
              break
            case 4:
              drawPatronus(ctx)
              break
            case 5:
              drawDementor(ctx)
              break
            case 6:
              drawPhoenix(ctx)
              break
            case 7:
              drawDeathlyHallows(ctx)
              break
          }
        }
      }
    })
  }, [])

  const drawHarryPotter = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#87CEEB'
    ctx.fillRect(0, 0, 200, 200)

    // Hair
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(100, 70, 40, 0, Math.PI * 2)
    ctx.fill()

    // Face
    ctx.fillStyle = '#FFE0BD'
    ctx.beginPath()
    ctx.arc(100, 80, 30, 0, Math.PI * 2)
    ctx.fill()

    // Glasses
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(85, 75, 10, 0, Math.PI * 2)
    ctx.moveTo(125, 75)
    ctx.arc(115, 75, 10, 0, Math.PI * 2)
    ctx.moveTo(95, 75)
    ctx.lineTo(105, 75)
    ctx.stroke()

    // Scar
    ctx.strokeStyle = '#FF0000'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(90, 55)
    ctx.lineTo(100, 45)
    ctx.lineTo(110, 55)
    ctx.stroke()

    // Robe
    ctx.fillStyle = '#000000'
    ctx.fillRect(70, 110, 60, 90)
  }

  const drawHogwartsCastle = (ctx: CanvasRenderingContext2D) => {
    // Sky
    ctx.fillStyle = '#000033'
    ctx.fillRect(0, 0, 200, 200)

    // Stars
    ctx.fillStyle = '#FFFFFF'
    for (let i = 0; i < 50; i++) {
      ctx.beginPath()
      ctx.arc(Math.random() * 200, Math.random() * 100, 1, 0, Math.PI * 2)
      ctx.fill()
    }

    // Castle base
    ctx.fillStyle = '#808080'
    ctx.fillRect(20, 80, 160, 120)

    // Towers
    ctx.fillStyle = '#A0522D'
    ctx.fillRect(40, 20, 30, 60)
    ctx.fillRect(130, 40, 30, 40)

    // Windows
    ctx.fillStyle = '#FFFF00'
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        ctx.fillRect(30 + i * 25, 90 + j * 25, 15, 15)
      }
    }
  }

  const drawGoldenSnitch = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#4B0082'
    ctx.fillRect(0, 0, 200, 200)

    // Snitch body
    ctx.fillStyle = '#FFD700'
    ctx.beginPath()
    ctx.arc(100, 100, 30, 0, Math.PI * 2)
    ctx.fill()

    // Wings
    ctx.fillStyle = '#FFFFFF'
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.quadraticCurveTo(150, 50, 180, 100)
    ctx.quadraticCurveTo(150, 150, 100, 100)
    ctx.moveTo(100, 100)
    ctx.quadraticCurveTo(50, 50, 20, 100)
    ctx.quadraticCurveTo(50, 150, 100, 100)
    ctx.fill()
  }

  const drawSortingHat = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#8B4513'
    ctx.fillRect(0, 0, 200, 200)

    // Hat base
    ctx.fillStyle = '#4B3621'
    ctx.beginPath()
    ctx.moveTo(50, 150)
    ctx.quadraticCurveTo(100, 50, 150, 150)
    ctx.closePath()
    ctx.fill()

    // Hat band
    ctx.fillStyle = '#CD853F'
    ctx.beginPath()
    ctx.ellipse(100, 140, 50, 15, 0, 0, Math.PI * 2)
    ctx.fill()

    // Hat face
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(80, 120, 5, 0, Math.PI * 2)
    ctx.arc(120, 120, 5, 0, Math.PI * 2)
    ctx.moveTo(90, 140)
    ctx.quadraticCurveTo(100, 150, 110, 140)
    ctx.stroke()
  }

  const drawPatronus = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, 200, 200)

    // Patronus (simplified as a glowing deer)
    ctx.strokeStyle = '#FFFFFF'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(50, 150)
    ctx.lineTo(70, 100)
    ctx.lineTo(100, 150)
    ctx.lineTo(130, 100)
    ctx.lineTo(150, 150)
    ctx.moveTo(100, 150)
    ctx.lineTo(100, 50)
    ctx.lineTo(70, 30)
    ctx.moveTo(100, 50)
    ctx.lineTo(130, 30)
    ctx.stroke()

    // Glow effect
    ctx.shadowColor = '#00FFFF'
    ctx.shadowBlur = 20
    ctx.stroke()
  }

  const drawDementor = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#4B0082'
    ctx.fillRect(0, 0, 200, 200)

    // Dementor body
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.moveTo(70, 30)
    ctx.quadraticCurveTo(100, 0, 130, 30)
    ctx.quadraticCurveTo(150, 100, 130, 170)
    ctx.quadraticCurveTo(100, 200, 70, 170)
    ctx.quadraticCurveTo(50, 100, 70, 30)
    ctx.fill()

    // Dementor face
    ctx.fillStyle = '#FFFFFF'
    ctx.beginPath()
    ctx.arc(85, 60, 5, 0, Math.PI * 2)
    ctx.arc(115, 60, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(100, 80, 10, 0, Math.PI)
    ctx.stroke()
  }

  const drawPhoenix = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#FF4500'
    ctx.fillRect(0, 0, 200, 200)

    // Phoenix body
    ctx.fillStyle = '#FFD700'
    ctx.beginPath()
    ctx.ellipse(100, 100, 50, 80, 0, 0, Math.PI * 2)
    ctx.fill()

    // Wings
    ctx.fillStyle = '#FF0000'
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.quadraticCurveTo(150, 50, 180, 100)
    ctx.quadraticCurveTo(150, 150, 100, 100)
    ctx.moveTo(100, 100)
    ctx.quadraticCurveTo(50, 50, 20, 100)
    ctx.quadraticCurveTo(50, 150, 100, 100)
    ctx.fill()

    // Beak
    ctx.fillStyle = '#FFA500'
    ctx.beginPath()
    ctx.moveTo(90, 80)
    ctx.lineTo(110, 80)
    ctx.lineTo(100, 90)
    ctx.closePath()
    ctx.fill()

    // Eye
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(95, 75, 3, 0, Math.PI * 2)
    ctx.fill()
  }

  const drawDeathlyHallows = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#2F4F4F'
    ctx.fillRect(0, 0, 200, 200)

    // Triangle
    ctx.strokeStyle = '#FFFFFF'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(100, 30)
    ctx.lineTo(30, 170)
    ctx.lineTo(170, 170)
    ctx.closePath()
    ctx.stroke()

    // Circle
    ctx.beginPath()
    ctx.arc(100, 115, 25, 0, Math.PI * 2)
    ctx.stroke()

    // Line
    ctx.beginPath()
    ctx.moveTo(100, 65)
    ctx.lineTo(100, 165)
    ctx.stroke()
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-100">
      {canvasRefs.map((ref, index) => (
        <canvas key={index} ref={ref} width={200} height={200} className="border border-gray-300 rounded-lg shadow-md" />
      ))}
    </div>
  )
}

export default HarryPotterGraphics

