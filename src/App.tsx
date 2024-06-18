import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { CONTRACT_ADDRESS } from './constants'
import { abi } from './assets/abis/erc20'
import { useState } from 'react'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { config } from './main'
import { toast } from 'react-toastify'

function App(): JSX.Element {
  const { address, isConnected } = useAccount()
  const [isMinting, setIsMinting] = useState(false)

  const { data, isLoading, refetch } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [address],
  })

  const { writeContractAsync } = useWriteContract()

  const handleMint = async () => {
    setIsMinting(true)
    try {
      const txHash = await writeContractAsync({
        abi,
        address: CONTRACT_ADDRESS,
        functionName: 'mint',
        args: [address, 100],
      })

      await waitForTransactionReceipt(config, {
        confirmations: 1,
        hash: txHash,
      })

      setIsMinting(false)
      toast('Minted successfully')

      refetch()
    } catch (error) {
      toast.error('Error while minting. Try again.')
      setIsMinting(false)
      console.error(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <section className="space-y-5">
        <h1 className="text-4xl font-bold text-center">
          🚀 DAPP Token Faucet 🚀
        </h1>
        <div className="p-4 border border-zinc-700 flex flex-col gap-5 items-center rounded-xl">
          <ConnectButton showBalance={false} accountStatus={'avatar'} />
          {!isConnected ? (
            <>
              <h2>First make sure your wallet is connected</h2>
            </>
          ) : (
            <div className="flex flex-col gap-5 items-center">
              <p className="text-xl  text-center">
                📇 <span className="font-bold">Address:</span> {address}
              </p>
              <p className="text-xl  text-center">
                💰 <span className="font-bold">Balance (DAPP):</span>{' '}
                {isLoading ? (
                  <span className="opacity-50">loading...</span>
                ) : (
                  data?.toString()
                )}
              </p>
              <button
                className="py-1 px-3 bg-zinc-800 rounded-lg hover:scale-105 transition-all disabled:opacity-50"
                onClick={handleMint}
                disabled={isMinting}
              >
                {isMinting ? 'Minting...' : 'Mint token'}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
