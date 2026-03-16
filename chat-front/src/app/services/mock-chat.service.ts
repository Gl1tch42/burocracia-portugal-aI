import { Injectable } from '@angular/core'
import { Message } from '../models/message.model'

@Injectable({ providedIn: 'root' })
export class MockChatService {

  ask(question: string): Promise<string> {

    return new Promise(resolve => {

      setTimeout(() => {

        resolve(
          "Resposta simulada da IA sobre processos da AIMA. Backend será conectado depois."
        )

      }, 800)

    })

  }
}